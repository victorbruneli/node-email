const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run() {
  const mailSent = await transporter.sendMail({
    text: "Corpo do texto e-mail ",
    subject: "Assunto e-mail",
    from: "VITAO DaMassa <testevitaodamassa@gmail.com>",
    to: [
      "testevitaodamassa@hotmail.com",
      "teste41@exemplo.com.br",
      "teste42@exemplo.com.br",
      "teste43@exemplo.com.br",
      "teste44@exemplo.com.br",
      "teste45@exemplo.com.br",
      "teste46@exemplo.com.br",
    ],
    html: `
    <html>
    <body>
      <strong> Conteudo HTML </strong></br>Do E-mail
    </body>
    </html>
    `,
  });

  console.log(mailSent);
}

run();
