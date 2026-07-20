import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

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
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

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
       EMAIL → BUSINESS
    ========================= */
await transporter.sendMail({
  from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
  to: data.email,
  subject: `Your Partnership Inquiry Has Been Received — ${BRAND_NAME}`,
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0; padding:0; background-color:#f4f6f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">

            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

              <!-- Header -->
              <tr>
                <td style="background:#1570EF;padding:32px 40px;text-align:center;">
                  <div style="display:inline-block;background:#fff;border-radius:10px;padding:10px 20px;margin-bottom:14px;">
                    <img src="${LOGO_URL}" style="max-width:140px;" />
                  </div>
                  <h1 style="margin:0;color:#fff;font-size:22px;">${BRAND_NAME}</h1>
                  <p style="margin:6px 0 0;color:#d0e6ff;font-size:13px;text-transform:uppercase;">
                    Strategic Growth & Partnerships
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px 40px 24px;">

                  <p style="font-size:18px;font-weight:700;color:#111827;margin:0 0 10px;">
                    Thank you, ${data.firstName}.
                  </p>

                  <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 16px;">
                    We’ve successfully received your partnership inquiry. Our team is currently reviewing your submission to better understand alignment opportunities and identify where we can create meaningful value together.
                  </p>

                  <!-- Summary -->
                  <table width="100%" style="margin:24px 0;">
                    <tr>
                      <td style="background:#f0f7ff;border-left:4px solid #1570EF;padding:16px 20px;border-radius:4px;">
                        <p style="font-size:11px;text-transform:uppercase;color:#6B7280;font-weight:700;margin:0 0 8px;">
                          Submission Overview
                        </p>

                        <p style="margin:0 0 6px;font-size:14px;">
                          <strong>Company:</strong> ${data.company}
                        </p>

                        <p style="margin:0 0 6px;font-size:14px;">
                          <strong>Partnership Type:</strong> ${data.partnershipType}
                        </p>

                        <p style="margin:0;font-size:14px;">
                          <strong>Timeline:</strong> ${data.timeline}
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Next Steps -->
                  <table width="100%" style="margin:28px 0;">
                    <tr>
                      <td>
                        <p style="font-size:13px;font-weight:700;text-transform:uppercase;color:#111827;margin-bottom:12px;">
                          What happens next:
                        </p>
                      </td>
                    </tr>

                    ${[
                      { step: "01", text: "Initial internal review of your partnership goals" },
                      { step: "02", text: "Strategic alignment assessment by our team" },
                      { step: "03", text: "Direct outreach with next steps within <strong>24–48 hours</strong>" },
                    ]
                      .map(
                        ({ step, text }) => `
                      <tr>
                        <td style="padding:8px 0;">
                          <table width="100%">
                            <tr>
                              <td style="width:36px;">
                                <span style="display:inline-block;width:26px;height:26px;background:#1570EF;color:#fff;border-radius:50%;text-align:center;font-size:11px;line-height:26px;font-weight:700;">
                                  ${step}
                                </span>
                              </td>
                              <td style="font-size:14px;color:#374151;">${text}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    `
                      )
                      .join("")}
                  </table>

                  <!-- Note -->
                  <table width="100%" style="margin-top:20px;">
                    <tr>
                      <td style="background:#fffbeb;border-left:4px solid #F59E0B;padding:16px 20px;border-radius:4px;">
                        <p style="font-size:13px;font-weight:700;color:#92400E;margin:0 0 6px;text-transform:uppercase;">
                          A Quick Note
                        </p>
                        <p style="font-size:14px;color:#374151;margin:0;line-height:1.7;">
                          If there’s additional context you’d like us to consider such as specific markets, collaboration models, or strategic goals feel free to <strong>reply directly to this email</strong>. The more insight we have, the more precise and valuable our response will be.
                        </p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px 40px 36px;text-align:center;border-top:1px solid #E5E7EB;">
                  <p style="font-size:13px;color:#6B7280;margin:0;">
                    Questions? Reach us at 
                    <a href="mailto:info@upscalealliance.com" style="color:#1570EF;text-decoration:none;">
                      info@upscalealliance.com
                    </a>
                  </p>

                  <p style="font-size:13px;color:#6B7280;margin-top:8px;">
                    <a href="${WEBSITE_URL}" style="color:#1570EF;text-decoration:none;">
                      ${WEBSITE_URL}
                    </a>
                  </p>

                  <p style="font-size:12px;color:#9CA3AF;margin-top:12px;">
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
});

    /* =========================
       EMAIL → USER (AUTO REPLY)
    ========================= */

    // await transporter.sendMail({
    //   from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
    //   to: data.email,
    //   subject: "We received your partnership inquiry",
    //   html: `
    //     <div style="font-family:Arial;max-width:700px;margin:auto">
    //       <h2 style="color:#1570EF">Thank you, ${data.firstName}!</h2>

    //       <p>
    //         We’ve received your partnership inquiry.
    //         Our team will review it and contact you within
    //         <strong>24 business hours</strong>.
    //       </p>

    //       <div style="background:#f8fafc;padding:16px;border-radius:8px">
    //         <p><strong>Company:</strong> ${data.company}</p>
    //         <p><strong>Partnership Interest:</strong> ${data.partnershipType}</p>
    //         <p><strong>Timeline:</strong> ${data.timeline}</p>
    //       </div>

    //       <p style="margin-top:20px">
    //         If required, an NDA and next steps will be shared before the call.
    //       </p>

    //       <hr style="margin:30px 0" />
    //       <img src="${LOGO_URL}" style="max-width:150px" />
    //       <p style="font-size:13px;color:#6b7280">
    //         ${BRAND_NAME} • <a href="${WEBSITE_URL}">${WEBSITE_URL}</a>
    //       </p>
    //     </div>
    //   `,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("❌ Partner Contact API Error:", err);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 },
    );
  }
}