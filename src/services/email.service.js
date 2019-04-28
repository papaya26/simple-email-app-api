import nodemailer from 'nodemailer';

import { emailDefaultSender, smtp } from '../config';

const mailjet = nodemailer.createTransport(smtp.mailjet);
const mailgun = nodemailer.createTransport(smtp.mailgun);

const send = (provider, { receipients, subject, htmlEmail }) => {
  return new Promise((resolve, reject) =>
    provider.sendMail(
      {
        from: emailDefaultSender,
        to: receipients,
        subject: subject,
        html: htmlEmail
      },
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    )
  );
};

export const emailService = {
  sendMail: payload => {
    return send(mailgun, payload).catch(err => send(mailjet, payload));
  }
};
