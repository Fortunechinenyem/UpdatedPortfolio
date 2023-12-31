export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "fortunechinenyem@gmail.com",
      pass: "rucjjkppjpvlqnbk",
    },
    secure: true,
  });
  const mailData = {
    from: "fortunechinenyem@gmail.com",
    to: "fortunechinenyem@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    } else {
      console.log(info);
      res.status(200).json({ message: "Email sent successfully." });
    }
  });
}
