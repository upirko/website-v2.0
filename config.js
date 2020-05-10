module.exports = {
  port: process.env.PORT || 3000,
  mail: {
    host: process.env.mailHost || 'smtp.yandex.ru',
    port: process.env.mailPort || 465,
    user: process.env.mailUser || 'upirko',
    pass: process.env.mailPass || 'nitDikcyg',
    uploadsDir: process.env.mailUploadsDir || 'uploads/',
    emailOptions: {
      from:  process.env.emailFrom || 'upirko@ya.ru',
      to:  process.env.emailTo || 'aleksandr.tihohod@natlex.ru'
    }
  }
};