import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '693df8995cb103',
    pass: 'd9b9f9a9ac6a52',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Team Feedget <oi@feedget.com>',
      to: 'Leandro <slashvr21@gmail.com>',
      subject: subject,
      html: body,
    })
  }
}
