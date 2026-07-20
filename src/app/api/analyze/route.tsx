// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// // 🔐 Gmail SMTP credentials
// const EMAIL_USER = "upscalealliancellc@gmail.com";
// const EMAIL_APP_PASSWORD = "djjjkmlluwucsckj";
// const BUSINESS_EMAIL = "upscalealliancellc@gmail.com";

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.json();
//     const { website, email } = formData;

//     console.log("🔍 Analysis Form Submission:", { website, email });

//     // Validate required fields
//     if (!website || !email) {
//       return NextResponse.json(
//         {
//           message: "Website URL and email are required",
//           success: false,
//         },
//         { status: 400 }
//       );
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { message: "Please enter a valid email address" },
//         { status: 400 }
//       );
//     }

//     // Format website URL
//     let formattedWebsite = website.trim();
//     if (!formattedWebsite.startsWith("http")) {
//       formattedWebsite = "https://" + formattedWebsite;
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: EMAIL_USER,
//         pass: EMAIL_APP_PASSWORD,
//       },
//     });

//     // Email to business
//     const businessMailOptions = {
//       from: `"Upscale Alliance" <info@upscalealliance.com>`,
//       to: BUSINESS_EMAIL,
//       subject: `📊 Website Analysis Request: ${formattedWebsite}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #1570EF;">New Website Analysis Request</h2>

//           <p><strong>Website:</strong>
//             <a href="${formattedWebsite}" target="_blank">${formattedWebsite}</a>
//           </p>

//           <p><strong>Email:</strong> ${email}</p>

//           <p><strong>Submitted:</strong> ${new Date().toLocaleDateString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           })}</p>

//         </div>
//       `,
//     };

//     // Email to user (confirmation)
//     const LOGO_URL = "https://upscalealliance.com/UpscaleAllianceLLc.png";

//     const userMailOptions = {
//       from: `"Upscale Alliance" <info@upscalealliance.com>`,
//       to: email,
//       subject: "Your Website Analysis Is in Progress — Upscale Alliance",
//       html: `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

//       <!-- Title -->
//       <div style="padding: 10px 30px 20px;">
//         <h1 style="color: #1570EF; font-size: 26px; margin-bottom: 10px;">
//           Website Analysis Request Confirmed
//         </h1>
//         <p style="color: #6b7280; font-size: 16px; line-height: 1.6;">
//           Thank you for reaching out to <strong>Upscale Alliance</strong>.
//           We’ve successfully received your website analysis request.
//         </p>
//       </div>

//       <!-- Summary -->
//       <div style="background: #f8fafc; padding: 20px 30px; margin: 0 30px; border-radius: 8px;">
//         <h3 style="margin-top: 0; color: #374151;">Request Summary</h3>

//         <p>
//           <strong>Website:</strong>
//           <a href="${formattedWebsite}" target="_blank" style="color: #1570EF;">
//             ${formattedWebsite}
//           </a>
//         </p>

//         <p><strong>Email:</strong> ${email}</p>

//         <p>
//           <strong>Submitted on:</strong>
//           ${new Date().toLocaleDateString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           })}
//         </p>
//       </div>

//       <!-- Next Steps -->
//       <div style="padding: 25px 30px;">
//         <h3 style="color: #374151;">What Happens Next</h3>
//         <ul style="color: #4b5563; line-height: 1.7; padding-left: 18px;">
//           <li>SEO & technical health review</li>
//           <li>Performance & speed evaluation</li>
//           <li>Mobile & UX assessment</li>
//           <li>Conversion optimization insights</li>
//           <li>Competitive positioning snapshot</li>
//         </ul>

//         <p style="color: #6b7280; margin-top: 15px;">
//           Our team typically completes this analysis within <strong>24 hours</strong>.
//           You’ll receive concise, actionable insights.
//         </p>
//       </div>

//       <!-- Footer -->
//       <div style="border-top: 1px solid #e5e7eb; padding: 20px 30px; text-align: center;">
//         <img
//           src="${LOGO_URL}"
//           alt="Upscale Alliance LLC Logo"
//           width="140"
//           style="max-width: 140px; height: auto; margin-bottom: 10px;"
//         />

//         <p style="font-size: 14px; color: #6b7280;">
//           Upscale Alliance LLC
//         </p>

//         <p style="font-size: 13px;">
//           <a href="https://upscalealliance.com" style="color: #1570EF; text-decoration: none;">
//             https://upscalealliance.com
//           </a>
//         </p>
//       </div>

//     </div>
//   `,
//     };

//     // Send emails
//     await transporter.sendMail(businessMailOptions);
//     console.log("📧 Email sent to business");

//     await transporter.sendMail(userMailOptions);
//     console.log("📧 Confirmation email sent to user");

//     return NextResponse.json(
//       {
//         message: "Website analysis request submitted successfully",
//         success: true,
//         data: {
//           website: formattedWebsite,
//           email,
//           timestamp: new Date().toISOString(),
//         },
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("❌ Error in analysis route:", error);

//     return NextResponse.json(
//       {
//         message: "Email sending failed",
//         success: false,
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🔐 Inline credentials (as requested)
const EMAIL_USER = "info@upscalealliance.com";
const EMAIL_PASS = "a1b2c3d4#Padhana173MainEmail";
const BUSINESS_EMAIL = "info@upscalealliance.com";
const LOGO_URL = "https://upscalealliance.com/UpscaleAllianceLLc.png";


export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { website, email } = formData;

    console.log("🔍 Analysis Form Submission:", { website, email });

    // Validate required fields
    if (!website || !email) {
      return NextResponse.json(
        {
          message: "Website URL and email are required",
          success: false,
        },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    // Format website URL
    let formattedWebsite = website.trim();
    if (!formattedWebsite.startsWith("http")) {
      formattedWebsite = "https://" + formattedWebsite;
    }

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

    // Email to business
    const businessMailOptions = {
      from: `"Upscale Alliance" <${EMAIL_USER}>`,
      to: BUSINESS_EMAIL,
      subject: `📊 Website Analysis Request: ${formattedWebsite}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1570EF;">New Website Analysis Request</h2>

          <p><strong>Website:</strong> 
            <a href="${formattedWebsite}" target="_blank">${formattedWebsite}</a>
          </p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Date:</strong> ${new Date().toLocaleDateString("en-GB")}</p>
        </div>
      `,
    };

    // Email to user
    const userMailOptions = {
      from: `"Upscale Alliance" <${EMAIL_USER}>`,
      to: email,
      subject:
        "We've Received Your Website Analysis Request — Upscale Alliance",
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
                  <p style="margin:0 0 16px; font-size:16px; color:#111827; font-weight:600;">
                    Thank you for reaching out.
                  </p>
                  <p style="margin:0 0 16px; font-size:15px; color:#374151; line-height:1.7;">
                    We've successfully received your website analysis request. Our team at <strong>Upscale Alliance LLC</strong> will conduct a thorough review of your digital presence and deliver a comprehensive, actionable report directly to your inbox.
                  </p>

                  <!-- Website Info Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                    <tr>
                      <td style="background-color:#f0f7ff; border-left: 4px solid #1570EF; border-radius:4px; padding: 16px 20px;">
                        <p style="margin:0 0 4px; font-size:11px; color:#6B7280; text-transform:uppercase; letter-spacing:1px;">Website Under Review</p>
                        <a href="${formattedWebsite}" target="_blank" style="font-size:15px; color:#1570EF; font-weight:600; text-decoration:none;">
                          ${formattedWebsite}
                        </a>
                      </td>
                    </tr>
                  </table>

                  <p style="margin:0 0 16px; font-size:15px; color:#374151; line-height:1.7;">
                    You can expect to hear from us within <strong style="color:#111827;">24 hours</strong>. If you have any immediate questions or additional context to share, feel free to reply to this email we're always happy to assist.
                  </p>

                  <!-- What to Expect -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin: 28px 0 16px;">
                    <tr>
                      <td style="padding-bottom:12px;">
                        <p style="margin:0 0 12px; font-size:13px; font-weight:700; color:#111827; text-transform:uppercase; letter-spacing:0.8px;">
                          What your analysis will cover:
                        </p>
                      </td>
                    </tr>
                    ${[
                      "SEO & keyword performance audit",
                      "AEO (Answer Engine Optimization) visibility check how your brand appears in AI-powered search results",
                      "Website speed & technical health check",
                      "Conversion rate & UX recommendations",
                      "Competitor positioning insights",
                    ]
                      .map(
                        (item) => `
                    <tr>
                      <td style="padding: 6px 0;">
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="width:20px; vertical-align:top; padding-top:1px;">
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

                  <!-- Custom Research CTA -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0 8px;">
                    <tr>
                      <td style="background-color:#fffbeb; border-left: 4px solid #F59E0B; border-radius:4px; padding: 16px 20px;">
                        <p style="margin:0 0 6px; font-size:13px; font-weight:700; color:#92400E; text-transform:uppercase; letter-spacing:0.8px;">
                          Need a More Focused Audit?
                        </p>
                        <p style="margin:0; font-size:14px; color:#374151; line-height:1.7;">
                          If you'd like us to prioritize a <strong>specific area</strong> whether it's a particular page, a target keyword, a competitor analysis, or any other aspect of your website simply <strong>reply to this email</strong> with the details. We'll tailor your analysis to reflect exactly what matters most to your business.
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
                    Questions? Reply to this email or contact us at
                    <a href="mailto:info@upscalealliance.com" style="color:#1570EF; text-decoration:none;">info@upscalealliance.com</a>
                  </p>
                  <p style="margin:10px 0 0; font-size:12px; color:#9CA3AF;">
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

    // Send emails
    await transporter.sendMail(businessMailOptions);
    console.log("📧 Sent to business");

    await transporter.sendMail(userMailOptions);
    console.log("📧 Sent to user");

    return NextResponse.json(
      {
        message: "Success",
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Error:", error);

    return NextResponse.json(
      {
        message: "Email sending failed",
        success: false,
      },
      { status: 500 },
    );
  }
}
