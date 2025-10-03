import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const { data, error } = await resend.emails.send({
      from: "Fortune Chinenyem <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Thank You!</title>
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                background: #f8fafc;
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
                padding: 40px 20px; 
                text-align: center;
              }
              .content { 
                padding: 40px; 
              }
              .footer { 
                text-align: center; 
                padding: 20px;
                background: #f8fafc;
                color: #64748b;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You, ${name}!</h1>
                <p>I've received your message and will get back to you soon.</p>
              </div>
              
              <div class="content">
                <p>Hi <strong>${name}</strong>,</p>
                
                <p>Thank you for reaching out through my portfolio! I appreciate you taking the time to contact me.</p>
                
                <p>I've received your message and will review it carefully. I typically respond within 24-48 hours.</p>
                
                <p>Looking forward to connecting with you!</p>
                
                <p>Best regards,<br>
                <strong>Fortune Chinenyem</strong></p>
              </div>
              
              <div class="footer">
                <p>This is an automated response. Please don't reply to this email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Auto-reply error:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
