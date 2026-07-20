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
    const { email } = formData;

    console.log("📩 Newsletter Subscription:", { email });

    if (!email) {
      return NextResponse.json(
        { message: "Email is required", success: false },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address", success: false },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    /* ==============================
       📧 Email to Business
    ============================== */
    const businessMailOptions = {
      from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
      to: BUSINESS_EMAIL,
      subject: "📬 New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1570EF;">New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed on:</strong> ${new Date().toLocaleDateString(
            "en-GB",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            },
          )}</p>
        </div>
      `,
    };

    /* ==============================
       📧 Confirmation Email to User
    ============================== */
    const userMailOptions = {
      from: `"${BRAND_NAME}" <info@upscalealliance.com>`,
      to: email,
      subject: "You're Now Part of the Upscale Alliance Community",
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
                        Welcome aboard. Your subscription is confirmed.
                      </p>
                      <p style="margin:0 0 16px; font-size:15px; color:#374151; line-height:1.7;">
                        You've officially joined the <strong>Upscale Alliance LLC</strong> newsletter a curated space where business leaders, marketers, and growth-focused teams stay ahead of the curve in digital performance.
                      </p>

                      <!-- Subscription Info Box -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                        <tr>
                          <td style="background-color:#f0f7ff; border-left: 4px solid #1570EF; border-radius:4px; padding: 16px 20px;">
                            <p style="margin:0 0 4px; font-size:11px; color:#6B7280; text-transform:uppercase; letter-spacing:1px; font-weight:700;">
                              Subscription Details
                            </p>
                            <p style="margin:0 0 6px; font-size:14px; color:#374151;">
                              <strong style="color:#111827;">Email:</strong> ${email}
                            </p>
                            <p style="margin:0; font-size:14px; color:#374151;">
                              <strong style="color:#111827;">Subscribed On:</strong> ${new Date().toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- What You'll Receive -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 28px 0 16px;">
                        <tr>
                          <td style="padding-bottom:12px;">
                            <p style="margin:0; font-size:13px; font-weight:700; color:#111827; text-transform:uppercase; letter-spacing:0.8px;">
                              What to expect in your inbox:
                            </p>
                          </td>
                        </tr>
                        ${[
                          "SEO & AEO strategies to grow your organic and AI-driven visibility",
                          "Healthcare & enterprise digital growth frameworks",
                          "Performance marketing insights and campaign breakdowns",
                          "Conversion rate & revenue optimization techniques",
                          "Industry news, algorithm updates, and what they mean for your business",
                        ]
                          .map(
                            (item) => `
                        <tr>
                          <td style="padding: 6px 0;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="width:20px; vertical-align:top; padding-top:2px;">
                                  <span style="display:inline-block; width:8px; height:8px; background-color:#1570EF; border-radius:50%; margin-top:5px;"></span>
                                </td>
                                <td style="font-size:14px; color:#374151; line-height:1.6;">${item}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>`,
                          )
                          .join("")}
                      </table>

                      <!-- Note Box -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0 8px;">
                        <tr>
                          <td style="background-color:#fffbeb; border-left: 4px solid #F59E0B; border-radius:4px; padding: 16px 20px;">
                            <p style="margin:0 0 6px; font-size:13px; font-weight:700; color:#92400E; text-transform:uppercase; letter-spacing:0.8px;">
                              A Note from Our Team
                            </p>
                            <p style="margin:0; font-size:14px; color:#374151; line-height:1.7;">
                              We respect your time and your inbox. You'll only hear from us when we have something genuinely valuable to share. If you ever have questions or want to explore how we can support your growth, simply <strong>reply to this email</strong> our team is always ready to help.
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
                        Questions? Reach us at
                        <a href="mailto:info@upscalealliance.com" style="color:#1570EF; text-decoration:none;">info@upscalealliance.com</a>
                      </p>
                      <p style="margin:8px 0 0; font-size:13px; color:#6B7280;">
                        Visit us at
                        <a href="${WEBSITE_URL}" style="color:#1570EF; text-decoration:none;">${WEBSITE_URL}</a>
                      </p>
                      <p style="margin:12px 0 0; font-size:12px; color:#9CA3AF;">
                        © ${new Date().getFullYear()} Upscale Alliance LLC. All rights reserved.
                      </p>
                        <p style="margin:12px 0 0; font-size:11px; color:#D1D5DB;">
                        You are receiving this email because you subscribed at ${WEBSITE_URL}.
                        You may unsubscribe at any time by contacting us directly.
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
    console.log("📧 Newsletter email sent to business");

    await transporter.sendMail(userMailOptions);
    console.log("📧 Confirmation email sent to subscriber");

    return NextResponse.json(
      {
        message: "Successfully subscribed to the newsletter",
        success: true,
        data: {
          email,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Newsletter API Error:", error);
    return NextResponse.json(
      {
        message: "Subscription received. Thank you!",
        success: true,
      },
      { status: 200 },
    );
  }
}
