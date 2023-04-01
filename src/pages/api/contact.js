export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: 'ImprovementService@gmail.com',
    to: process.env.EMAIL,
    subject: `ImprovementService новая заявка`,
    html: `<div style="font-size: 18px;">
          <p><strong>Имя / организация:</strong> ${req.body.name}</p>
          <p><strong>Номер телефона:</strong> ${req.body.tel}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Комментарий:</strong> ${req.body.message}</p>
          </div>`
  }
  transporter.sendMail(mailData, function (err, info) {
  })

  console.log(req.body)
  res.send('success')
}