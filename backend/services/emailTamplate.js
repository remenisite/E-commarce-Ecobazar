const emailTemplate = ({ otp }) => {
  return `
  <div style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, sans-serif;">
    
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          
          <table width="500" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#000; color:#fff; text-align:center; padding:20px; font-size:22px; font-weight:bold;">
                🛍️ Remenisite
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333;">
                
                <h2 style="margin-top:0;">Hello Dear,</h2>
                
                <p style="font-size:16px; line-height:1.5;">
                  Thank you for signing up with us! Please use the OTP below to verify your email address.
                </p>

                <!-- OTP Box -->
                <div style="text-align:center; margin:30px 0;">
                  <span style="
                    display:inline-block;
                    background:#f1f1f1;
                    padding:15px 30px;
                    font-size:28px;
                    letter-spacing:5px;
                    font-weight:bold;
                    color:#000;
                    border-radius:8px;
                  ">
                    ${otp}
                  </span>
                </div>

                <p style="font-size:14px; color:#777;">
                  This OTP is valid for 5 minutes. Please do not share it with anyone.
                </p>

                <p style="font-size:14px; margin-top:20px;">
                  If you did not request this, you can safely ignore this email.
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#fafafa; text-align:center; padding:20px; font-size:12px; color:#999;">
                © ${new Date().getFullYear()} Remenisite. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </div>
  `;
};

const resetTamplate = ({ otp }) => {
  return `
  <div style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:6px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background-color:#2f80ed; padding:20px; text-align:center;">
                <h1 style="color:#ffffff; font-size:24px; margin:0;">
                  Password Reset
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333333; font-size:14px; line-height:1.6;">
                <p style="margin:0 0 15px 0;">
                  Hello,
                </p>

                <p style="margin:0 0 15px 0;">
                  We received a request to reset your password. Click the button below to create a new one.
                </p>

                <!-- Button -->
                <p style="text-align:center; margin:30px 0;">
                  <a href="${otp}"
                     style="background-color:#2f80ed; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:4px; display:inline-block; font-weight:bold;">
                    Reset Password
                  </a>
                </p>

                <p style="margin:0 0 15px 0;">
                  This link will expire in <strong>24 hours</strong>. If you did not request a password reset, you can safely ignore this email.
                </p>

                <p style="margin:0;">
                  Thanks,<br />
                  <strong>Your Company Name</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f0f2f4; padding:15px; text-align:center; font-size:12px; color:#777777;">
                <p style="margin:0;">
                  © 2026 Your Company Name. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
};

module.exports = { emailTemplate, resetTamplate };
