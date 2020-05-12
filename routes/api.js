const express = require('express');
const router = express.Router();
const mailer = require('../models/mailer');
const axios = require('axios');
const config = require('../config');

const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.mail.uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
})
const upload = multer({storage: storage});

router.post('/request', upload.single('attachment'), function(req, res, next) {
  if (!req.body.token) {
    return res.json({success: false});
  }
  axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${config.reCaptchaSecretKey}&response=${req.body.token}`).then((r) => {
    console.log(r.data.success);
    if (!r.data.success) {
      return res.json({success: false});
    }
    const mailOptions = Object.assign({}, config.mail.emailOptions);
    if (req.file) {
      mailOptions.attachments = [{
        path: req.file.path
      }];
    }
    mailOptions.subject =  req.body.type == 'vacancy' ? 'Заявка с сайта' : 'Сообщение с сайта';
    const params = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      position: req.body.position,
      message: req.body.message,
    };
    res.render('letter', params, (err, html) => {
      if (err) return res.json({success: false});
      mailOptions.html = html;
      mailer.sendMail(mailOptions).then(() => {
        res.json({success: true});
      }).catch(() => {
        res.json({success: false});
      });
    });
  }).catch(() => {
    res.json({success: false});
  });
});

module.exports = router;
