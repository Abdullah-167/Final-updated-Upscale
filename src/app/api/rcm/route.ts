import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🔐 Inline credentials (as requested)
const EMAIL_USER = "info@upscalealliance.com";
const EMAIL_PASS = "a1b2c3d4#Padhana173MainEmail";
const BUSINESS_EMAIL = "info@upscalealliance.com";

/* =========================
   BRANDING
========================= */
const BRAND_NAME = "Upscale Alliance LLC";
const WEBSITE_URL = "https://www.upscalealliance.com";
const LOGO_URL = "https://upscalealliance.com/UpscaleAllianceLLc.png";

/* =========================
   POST HANDLER
========================= */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    /* =========================
       INPUT VALIDATION
    ========================= */
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 },
      );
    }

    /* =========================
       SAFE DEFAULTS
    ========================= */
    const safeData = {
      name: formData.name || "Not provided",
      email: formData.email || "Not provided",
      phone: formData.phone || "Not provided",
      practice: formData.practice || "Not provided",
      specialty: formData.specialty || "Not provided",
      practiceSize: formData.practiceSize || "Not provided",
      revenue: formData.revenue || "Not provided",
      preferredDate: formData.preferredDate || "Not specified",
      message: formData.message || "No message provided",
      submittedDate:
        formData.submittedDate || new Date().toLocaleString("en-US"),
    };

    // ✅ Zoho SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    /* =========================
       VERIFY SMTP CONNECTION
    ========================= */
    await transporter.verify();

    /* =========================
       EMAIL → BUSINESS
    ========================= */
    const businessMailOptions = {
      from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
      to: BUSINESS_EMAIL,
      replyTo: safeData.email,
      subject: "New RCM Assessment Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">
          <h2 style="color:#1570EF;">New RCM Contact Submission</h2>

          <div style="background:#f8fafc; padding:20px; border-radius:8px;">
            <p><strong>Name:</strong> ${safeData.name}</p>
            <p><strong>Email:</strong> ${safeData.email}</p>
            <p><strong>Phone:</strong> ${safeData.phone}</p>
            <p><strong>Practice Name:</strong> ${safeData.practice}</p>
            <p><strong>Medical Specialty:</strong> ${safeData.specialty}</p>
            <p><strong>Practice Size:</strong> ${safeData.practiceSize}</p>
            <p><strong>Estimated Revenue:</strong> ${safeData.revenue}</p>
            <p><strong>Preferred Consultation Date:</strong> ${safeData.preferredDate}</p>
          </div>

          <div style="background:#f1f5f9; padding:20px; border-radius:8px; margin-top:20px;">
            <h3>Message</h3>
            <p>${safeData.message}</p>
          </div>

          <div style="margin-top:30px; text-align:center; border-top:1px solid #e5e7eb; padding-top:20px;">
            <img src="${LOGO_URL}" style="max-width:160px;" />
            <p style="font-size:13px; color:#6b7280;">
              ${BRAND_NAME} • 
              <a href="${WEBSITE_URL}" style="color:#1570EF;">${WEBSITE_URL}</a>
            </p>
          </div>
        </div>
      `,
    };

    /* =========================
       EMAIL → USER (AUTO-REPLY)
    ========================= */
    const userMailOptions = {
      from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
      to: safeData.email,
      replyTo: BUSINESS_EMAIL,
      subject: `Your RCM Assessment Request Has Been Received — ${BRAND_NAME}`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body style="margin:0; padding:0; background:#f4f6f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">

            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

              <!-- Header -->
              <tr>
                <td style="background:#1570EF;padding:32px 40px;text-align:center;">
                  <div style="display:inline-block;background:#ffffff;border-radius:10px;padding:10px 20px;margin-bottom:14px;">
                    <img src="${LOGO_URL}" style="max-width:140px;" />
                  </div>
                  <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">
                    ${BRAND_NAME}
                  </h1>
                  <p style="margin:6px 0 0;color:#d0e6ff;font-size:13px;text-transform:uppercase;">
                    Revenue Cycle Optimization
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px 40px 24px;">

                  <p style="font-size:18px;font-weight:700;color:#111827;margin:0 0 10px;">
                    Thank you, ${safeData.name}.
                  </p>

                  <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 16px;">
                    We’ve successfully received your request for an RCM assessment. Our specialists are reviewing your submission to identify performance gaps, revenue leakage points, and opportunities for optimization across your billing and collections workflows.
                  </p>

                  <!-- Summary -->
                  <table width="100%" style="margin:24px 0;">
                    <tr>
                      <td style="background:#f0f7ff;border-left:4px solid #1570EF;padding:16px 20px;border-radius:4px;">
                        <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;color:#6B7280;font-weight:700;">
                          Submission Overview
                        </p>

                        <p style="margin:0 0 6px;font-size:14px;">
                          <strong>Practice:</strong> ${safeData.practice}
                        </p>

                        <p style="margin:0 0 6px;font-size:14px;">
                          <strong>Specialty:</strong> ${safeData.specialty}
                        </p>

                        <p style="margin:0;font-size:14px;">
                          <strong>Submitted On:</strong> ${safeData.submittedDate}
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Next Steps -->
                  <table width="100%" style="margin:28px 0;">
                    <tr>
                      <td>
                        <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;color:#111827;">
                          What happens next:
                        </p>
                      </td>
                    </tr>

                    ${[
                      {
                        step: "01",
                        text: "Initial audit of your current revenue cycle processes",
                      },
                      {
                        step: "02",
                        text: "Identification of inefficiencies, denials, and revenue gaps",
                      },
                      {
                        step: "03",
                        text: "Strategic consultation with actionable recommendations within <strong>24–48 hours</strong>",
                      },
                    ]
                      .map(
                        ({ step, text }) => `
                      <tr>
                        <td style="padding:8px 0;">
                          <table width="100%">
                            <tr>
                              <td style="width:36px;">
                                <span style="display:inline-block;width:26px;height:26px;background:#1570EF;color:#ffffff;border-radius:50%;text-align:center;font-size:11px;font-weight:700;line-height:26px;">
                                  ${step}
                                </span>
                              </td>
                              <td style="font-size:14px;color:#374151;line-height:1.6;">
                                ${text}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    `,
                      )
                      .join("")}
                  </table>

                  <!-- Note -->
                  <table width="100%" style="margin-top:20px;">
                    <tr>
                      <td style="background:#fffbeb;border-left:4px solid #F59E0B;padding:16px 20px;border-radius:4px;">
                        <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#92400E;text-transform:uppercase;">
                          A Quick Note
                        </p>
                        <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">
                          If there are specific KPIs, payer challenges, or operational concerns you’d like us to prioritize, feel free to <strong>reply directly to this email</strong>. Additional context allows us to deliver a far more precise and valuable assessment.
                        </p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px 40px 36px;text-align:center;border-top:1px solid #E5E7EB;">
                  <p style="margin:0;font-size:13px;color:#6B7280;">
                    Questions? Reach us at 
                    <a href="mailto:info@upscalealliance.com" style="color:#1570EF;text-decoration:none;">
                      info@upscalealliance.com
                    </a>
                  </p>

                  <p style="margin-top:8px;font-size:13px;color:#6B7280;">
                    <a href="${WEBSITE_URL}" style="color:#1570EF;text-decoration:none;">
                      ${WEBSITE_URL}
                    </a>
                  </p>

                  <p style="margin-top:12px;font-size:12px;color:#9CA3AF;">
                    © ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.
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
    /* =========================
       SEND EMAILS
    ========================= */
    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { success: true, message: "RCM emails sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ RCM Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send RCM email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
