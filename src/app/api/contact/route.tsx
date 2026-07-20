import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🔐 Inline credentials (as requested)
const EMAIL_USER = "info@upscalealliance.com";
const EMAIL_PASS = "a1b2c3d4#Padhana173MainEmail";
const BUSINESS_EMAIL = "info@upscalealliance.com";
const BRAND_NAME = "Upscale Alliance";
const WEBSITE_URL = "https://www.upscalealliance.com";
const LOGO_URL = "https://upscalealliance.com/UpscaleAllianceLLc.png";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    /* =======================
       EMAIL → BUSINESS
    ======================= */
    const businessMailOptions = {
      from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
      to: BUSINESS_EMAIL,
      subject: `New Inquiry from ${formData.firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin:auto;">
          <h2 style="color:#1570EF;">New Contact Form Submission</h2>
          <div style="background:#f8fafc; padding:20px; border-radius:8px;">
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName || ""}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Industry:</strong> ${formData.industry}</p>
            <p><strong>Region:</strong> ${formData.region}</p>
          </div>
          <div style="background:#f8fafc; padding:20px; border-radius:8px; margin-top:20px;">
            <h3>Project Details</h3>
            <p><strong>Services:</strong> ${formData.services.join(", ")}</p>
            <p><strong>Budget:</strong> ${formData.budget}</p>
            <p><strong>Referral Source:</strong> ${formData.referralSource || "Not specified"}</p>
            <p><strong>Details:</strong><br/>${formData.projectDetails}</p>
          </div>
          <div style="margin-top:25px; text-align:center; border-top:1px solid #e5e7eb; padding-top:20px;">
            <img src="${LOGO_URL}" style="max-width:160px;" />
            <p style="font-size:13px;color:#6b7280;">
              ${BRAND_NAME} • <a href="${WEBSITE_URL}" style="color:#1570EF;">${WEBSITE_URL}</a>
            </p>
          </div>
        </div>
      `,
    };

    /* =======================
       EMAIL → USER
    ======================= */
    const userMailOptions = {
      from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
      to: formData.email,
      subject: `We've Received Your Inquiry, ${formData.firstName} — Upscale Alliance`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
        <body style="margin:0; padding:0; background-color:#f4f6f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">

                  <!-- Header -->
  <tr>
  <td style="background-color:#1570EF; padding: 32px 40px; text-align:center;">
    <!-- White pill behind logo -->
    <div style="display:inline-block; background-color:#ffffff; border-radius:10px; padding: 10px 20px; margin-bottom:14px;">
      <img src="${LOGO_URL}" alt="Upscale Alliance" style="max-width:140px; display:block;" />
    </div>
    <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:700; letter-spacing:0.5px;">
      Upscale Alliance
    </h1>
    <p style="margin:6px 0 0; color:#d0e6ff; font-size:13px; letter-spacing:1px; text-transform:uppercase;">
      Digital Growth Partners
    </p>
  </td>
</tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding: 40px 40px 24px;">
                      <p style="margin:0 0 8px; font-size:18px; color:#111827; font-weight:700;">
                        Thank you, ${formData.firstName}.
                      </p>
                      <p style="margin:0 0 16px; font-size:15px; color:#374151; line-height:1.7;">
                        We've successfully received your inquiry. The team at <strong>Upscale Alliance LLC</strong> will carefully review your requirements and get back to you with a tailored response as soon as possible.
                      </p>

                      <!-- Submission Summary Box -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                        <tr>
                          <td style="background-color:#f0f7ff; border-left: 4px solid #1570EF; border-radius:4px; padding: 16px 20px;">
                            <p style="margin:0 0 10px; font-size:11px; color:#6B7280; text-transform:uppercase; letter-spacing:1px; font-weight:700;">
                              Inquiry Summary
                            </p>
                            <p style="margin:0 0 6px; font-size:14px; color:#374151;">
                              <strong style="color:#111827;">Services Requested:</strong> ${formData.services.join(", ")}
                            </p>
                            <p style="margin:0 0 6px; font-size:14px; color:#374151;">
                              <strong style="color:#111827;">Budget Range:</strong> ${formData.budget}
                            </p>
                            <p style="margin:0; font-size:14px; color:#374151;">
                              <strong style="color:#111827;">Submitted On:</strong> ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- What Happens Next -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 28px 0 16px;">
                        <tr>
                          <td style="padding-bottom:12px;">
                            <p style="margin:0; font-size:13px; font-weight:700; color:#111827; text-transform:uppercase; letter-spacing:0.8px;">
                              What happens next:
                            </p>
                          </td>
                        </tr>
                        ${[
                          { step: "01", text: "Our team reviews your project requirements in detail" },
                          { step: "02", text: "We may reach out for any clarifications needed to best serve you" },
                          { step: "03", text: "You receive a fully tailored proposal within <strong>24–48 hours</strong>" },
                        ]
                          .map(
                            ({ step, text }) => `
                        <tr>
                          <td style="padding: 8px 0;">
                            <table cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td style="width:36px; vertical-align:top;">
                                  <span style="display:inline-block; width:26px; height:26px; background-color:#1570EF; border-radius:50%; text-align:center; line-height:26px; font-size:11px; font-weight:700; color:#ffffff;">
                                    ${step}
                                  </span>
                                </td>
                                <td style="font-size:14px; color:#374151; line-height:1.6; vertical-align:middle;">${text}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>`
                          )
                          .join("")}
                      </table>

                      <!-- Custom Request CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0 8px;">
                        <tr>
                          <td style="background-color:#fffbeb; border-left: 4px solid #F59E0B; border-radius:4px; padding: 16px 20px;">
                            <p style="margin:0 0 6px; font-size:13px; font-weight:700; color:#92400E; text-transform:uppercase; letter-spacing:0.8px;">
                              Have Something Specific in Mind?
                            </p>
                            <p style="margin:0; font-size:14px; color:#374151; line-height:1.7;">
                              If you'd like to provide additional context whether it's a specific goal, a target market, a competitor to benchmark against, or any detail you feel is important simply <strong>reply to this email</strong>. The more we know, the better we can serve you.
                            </p>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 0 40px;">
                      <hr style="border:none; border-top:1px solid #E5E7EB; margin:0;" />
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px 36px; text-align:center;">
                      <p style="margin:0 0 4px; font-size:13px; color:#6B7280;">
                        Questions? Reply to this email or reach us at
                        <a href="mailto:info@upscalealliance.com" style="color:#1570EF; text-decoration:none;">info@upscalealliance.com</a>
                      </p>
                      <p style="margin:8px 0 0; font-size:13px; color:#6B7280;">
                        Visit us at
                        <a href="${WEBSITE_URL}" style="color:#1570EF; text-decoration:none;">${WEBSITE_URL}</a>
                      </p>
                      <p style="margin:12px 0 0; font-size:12px; color:#9CA3AF;">
                        © ${new Date().getFullYear()} Upscale Alliance LLC. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}