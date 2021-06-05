// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendMail } from "../../libs/mail"

const send = async(req, res) => {
  const emailEnviado = await sendMail()

  res.status(200).json({emailEnviado})
}

export default send