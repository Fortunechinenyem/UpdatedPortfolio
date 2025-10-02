import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    await resend.emails.send({
      from: "fortunechinenyem@gmail.com",
      to: "fortunechinenyem@gmail.com",
      subject: `Portfolio Enquiry: ${subject}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from fortunesportfolio.vercel.app
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
