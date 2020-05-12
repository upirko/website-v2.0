module.exports = {
  port: process.env.PORT || 3000,
  mail: {
    host: process.env.mailHost || 'smtp.yandex.ru',
    port: process.env.mailPort || 465,
    user: process.env.mailUser || '',
    pass: process.env.mailPass || '',
    uploadsDir: process.env.mailUploadsDir || 'uploads/',
    emailOptions: {
      from:  process.env.emailFrom || '',
      to:  process.env.emailTo || ''
    }
  }
};
