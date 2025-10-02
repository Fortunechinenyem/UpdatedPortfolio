import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing email credentials");
    return res.status(500).json({
      message:
        "Email service not configured properly. Please contact me directly at fortunechinenyem@gmail.com",
    });
  }

  // Use different configuration for better reliability
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587, // Use 587 instead of 465
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Add connection timeout
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  const mailData = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email, // So you can reply directly to the sender
    subject: `Portfolio Message: ${subject}`,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Message from Portfolio</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #fff; border-left: 4px solid #3b82f6;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
        </div>
      </div>
    `,
  };

  try {
    // Verify connection first
    await transporter.verify();
    console.log("SMTP connection verified");

    // Send email
    await transporter.sendMail(mailData);
    console.log("Email sent successfully");

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error.message);

    // More specific error messages
    let errorMessage = "Failed to send message. ";

    if (error.code === "EAUTH") {
      errorMessage += "Authentication failed. Please check email credentials.";
    } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      errorMessage += "Connection timeout. Please try again later.";
    } else {
      errorMessage +=
        "Please try again or contact me directly at fortunechinenyem@gmail.com";
    }

    return res.status(500).json({ message: errorMessage });
  }
}
