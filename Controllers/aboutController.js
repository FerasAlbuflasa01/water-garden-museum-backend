const nodeMailer = require('nodemailer')

exports.sendEmail2 = async (req, res) => {
  const transporter = nodeMailer.createTransport({
    service: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ferasny@gmail.com',
      pass: 'Lego@2234$'
    }
  })

  const info = await transporter.sendMail({
    from: 'ferasny@gmail.com',
    to: 'ferasny@gmail.com',
    subject: 'hello',
    text: 'hello world'
  })
  return res.json({ message: 'Email sent successfully' })
}