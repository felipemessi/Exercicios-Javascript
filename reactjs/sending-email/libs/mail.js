import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.SENDGRID_API_KEY
  }
}))

export const sendMail = () => {
  const message = {
    from: 'felipe@professormessi.com.br',
    to: 'felipemessibraga@gmail.com',
    subject: `New message from 'felipe@professormessi.com.br'`,
    text: "Olá, mundo!",
    replyTo: 'felipe@professormessi.com.br'
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}