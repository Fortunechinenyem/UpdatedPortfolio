import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email validation - MOVED INSIDE THE HANDLER
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "fortunechinenyem@gmail.com",
      subject: `New Portfolio Message: ${subject}`,
      reply_to: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Portfolio Contact</title>
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 20px;
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: white;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              }
              .header { 
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                color: white; 
                padding: 30px 20px; 
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
              }
              .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
              }
              .content { 
                padding: 30px; 
              }
              .field { 
                margin-bottom: 20px;
                padding: 15px;
                background: #f8fafc;
                border-radius: 10px;
                border-left: 4px solid #3b82f6;
              }
              .label { 
                font-weight: 600; 
                color: #3b82f6;
                display: block;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                color: #1e293b;
                font-size: 16px;
              }
              .message-container {
                background: white;
                padding: 20px;
                border-radius: 10px;
                border: 2px solid #e2e8f0;
                margin-top: 10px;
              }
              .actions {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
              }
              .btn {
                display: inline-block;
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 25px;
                font-weight: 600;
                margin: 0 10px;
              }
              .footer { 
                text-align: center; 
                margin-top: 30px; 
                color: #64748b; 
                font-size: 14px;
                padding: 20px;
                background: #f8fafc;
                border-top: 1px solid #e2e8f0;
              }
              .highlight {
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 700;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Portfolio Message</h1>
                <p>Someone reached out through your portfolio!</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <span class="label"> From</span>
                  <span class="value">${name} (<a href="mailto:${email}">${email}</a>)</span>
                </div>
                
                <div class="field">
                  <span class="label"> Subject</span>
                  <span class="value">${subject}</span>
                </div>
                
                <div class="field">
                  <span class="label">Message</span>
                  <div class="message-container">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>

                <div class="actions">
                  <a href="mailto:${email}?subject=Re: ${subject}&body=Hi ${name}," class="btn">
                     Reply to ${name}
                  </a>
                </div>
              </div>
              
              <div class="footer">
                <p> This message was sent from your portfolio at <strong class="highlight">fortunesportfolio.vercel.app</strong></p>
                <p> Received on ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
NEW PORTFOLIO MESSAGE
=====================

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

---
Sent from fortunesportfolio.vercel.app
Received: ${new Date().toLocaleString()}
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({ error: error.message });
    }

    console.log("Email sent successfully:", data);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
