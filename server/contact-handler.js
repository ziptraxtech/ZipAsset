import nodemailer from "nodemailer";

export async function handleContact(req, res) {
  if (req.method && req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const fields = {
    name: readText(body.name, 120),
    email: readText(body.email, 254),
    phone: readText(body.phone, 40),
    company: readText(body.company, 160),
    charger: readText(body.charger, 120),
    franchisePlan: readText(body.franchisePlan, 120),
    useCase: readText(body.useCase, 100),
    quantity: readText(body.quantity, 40),
    deploymentLocation: readText(body.deploymentLocation, 160),
    timeline: readText(body.timeline, 60),
    preferredContact: readText(body.preferredContact, 40),
    discoveryChannel: readText(body.discoveryChannel, 80),
    message: readText(body.message, 3000),
    referrer: readText(body.referrer, 1000),
    utmSource: readText(body.utmSource, 200),
    utmMedium: readText(body.utmMedium, 200),
    utmCampaign: readText(body.utmCampaign, 200),
    utmContent: readText(body.utmContent, 200),
    utmTerm: readText(body.utmTerm, 200),
  };

  if (!fields.name || (!fields.charger && !fields.franchisePlan) || body.consent !== true) {
    return res.status(400).json({
      error: "Name, a charger or franchise plan selection, and contact consent are required.",
    });
  }

  if (!fields.email && !fields.phone) {
    return res.status(400).json({
      error: "Please provide an email address or phone number so our team can reach you.",
    });
  }
  if (fields.preferredContact === "Email" && !fields.email) {
    return res.status(400).json({ error: "An email address is required for email follow-up." });
  }
  if (fields.preferredContact !== "Email" && !fields.phone) {
    return res.status(400).json({ error: "A phone number is required for phone or WhatsApp follow-up." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (fields.email && !emailRegex.test(fields.email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(503).json({
      error: "Email delivery is not configured. Please contact us directly at info@zip-bolt.com.",
    });
  }

  const detailRows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone / WhatsApp", fields.phone],
    ["Company / organization", fields.company],
    ["Charger", fields.charger],
    ["Franchise plan", fields.franchisePlan],
    ["Intended use", fields.useCase],
    ["Estimated quantity", fields.quantity],
    ["Installation city / region", fields.deploymentLocation],
    ["Purchase timeline", fields.timeline],
    ["Preferred follow-up", fields.preferredContact],
    ["How they heard about us", fields.discoveryChannel],
    ["UTM source", fields.utmSource],
    ["UTM medium", fields.utmMedium],
    ["UTM campaign", fields.utmCampaign],
    ["UTM content", fields.utmContent],
    ["UTM term", fields.utmTerm],
    ["Referrer", fields.referrer],
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #dbe4ff; background: #f6f8ff; font-weight: 700; width: 190px;">${escapeHtml(label)}</td>
          <td style="padding: 10px 14px; border: 1px solid #dbe4ff;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@zip-bolt.com",
    ...(fields.email ? { replyTo: fields.email } : {}),
    subject: fields.franchisePlan ? "New micro-utility franchise enquiry" : "New charger sales enquiry",
    html: `
      <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0a1738;">
        <h2 style="color: #2a56c6; margin-bottom: 8px;">${fields.franchisePlan ? "New Micro-Utility Franchise Enquiry" : "New Charger Sales Enquiry"}</h2>
        <p style="color: #5b6475; margin-bottom: 24px;">A prospective customer submitted an enquiry through the ZipAsset website.</p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          ${detailRows}
        </table>

        <div style="background: #f6f8ff; border: 1px solid #dbe4ff; border-radius: 12px; padding: 16px;">
          <h3 style="margin: 0 0 8px; font-size: 14px; color: #2a56c6;">Project details or questions</h3>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.7; color: #334155;">${escapeHtml(fields.message || "No additional details provided.")}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
          This lead was submitted through the ZipAsset website.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
}

function readText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
