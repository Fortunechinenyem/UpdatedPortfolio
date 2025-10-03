// // pages/api/sendAutoReply.js
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { name, email } = req.body;

//     if (!name || !email) {
//       return res.status(400).json({ error: "Name and email are required" });
//     }

//     const response = await resend.emails.send({
//       from: "Fortune Chinenyem <fortunechinenyem@gmail.com>", // ✅ must be a verified sender
//       to: email, // ✅ recipient is the user
//       subject: "Thanks for reaching out!",
//       html: `
//         <div style="font-family:Arial,sans-serif;padding:20px;">
//           <h2 style="color:#3b82f6;">Hi ${name},</h2>
//           <p>Thanks for reaching out through my portfolio website. I’ve received your message and will get back to you soon (usually within 24–48 hours).</p>
//           <p>Looking forward to connecting with you!</p>
//           <p style="margin-top:20px;">Best regards,<br><strong>Fortune Chinenyem</strong></p>
//           <hr style="margin:30px 0;border:none;border-top:1px solid #eee;" />
//           <small>This is an automated reply to confirm I received your message.</small>
//         </div>
//       `,
//       text: `Hi ${name},\n\nThanks for reaching out! I've received your message and will get back to you soon.\n\n- Fortune Chinenyem`,
//     });

//     if (response.error) {
//       console.error("Auto-reply error:", response.error);
//       return res.status(500).json({ error: response.error.message });
//     }

//     return res.status(200).json({ success: true, data: response });
//   } catch (error) {
//     console.error("Server error (auto-reply):", error);
//     return res.status(500).json({ error: error.message });
//   }
// }
