const nodemailer = require("nodemailer");

async function sendWelcomeEmail(email, name) {
  try {
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dev.masud0X0@gmail.com",
        pass: "Masudnda@3",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mailOptions = {
      from: "dev.masud0x0@gmail.com",
      to: email,
      subject: "Thabks for joining in!",
      text: `Welcome to the app ${name}. Let me know you get along with the app`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully!");
  } catch (e) {
    console.log(e);
  }
}
async function sendCancelationEmail(email, name) {
  try {
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dev.masud0X0@gmail.com",
        pass: "Masudnda@3",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mailOptions = {
      from: "dev.masud0x0@gmail.com",
      to: email,
      subject: "Email for user cancelation!",
      text: `We are sorry ${name}. Is there anything we can do to keep you on board.`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully!");
  } catch (e) {
    console.log(e);
  }
}

module.exports = { sendWelcomeEmail, sendCancelationEmail };
