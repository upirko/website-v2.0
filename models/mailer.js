const nodemailer = require('nodemailer');
const config = require('../config');

module.exports = nodemailer.createTransport({
  host: config.mail.host,
  port: config.mail.port,
  secure: true,
  auth: {
    user: config.mail.user,
    pass: config.mail.pass
  }
});