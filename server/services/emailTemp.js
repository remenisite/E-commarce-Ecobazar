const emailTemp = ({ otp }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:30px 0;">
  <tr>
    <td align="center">

      <table width="100%" cellpadding="0" cellspacing="0"
        style="max-width:520px; background:#ffffff; border-radius:8px; overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:#0d6efd; padding:20px; text-align:center;">
            <h2 style="color:#ffffff; margin:0;">Your OTP Code</h2>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:30px; text-align:center;">
            <p style="color:#333; font-size:14px;">
              Your One-Time Password (OTP) is:
            </p>

            <div style="margin:20px 0;">
              <span style="
                font-size:26px;
                font-weight:bold;
                letter-spacing:6px;
                color:#0d6efd;
                background:#f1f5ff;
                padding:14px 28px;
                border-radius:6px;
                display:inline-block;">
                ${otp}
              </span>
            </div>

            <p style="font-size:13px; color:#666;">
              This OTP is valid for <strong>2 minutes</strong>.
            </p>

            <p style="font-size:12px; color:#999;">
              Please do not share this code with anyone.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f4f6f8; padding:15px; text-align:center;">
            <p style="font-size:12px; color:#999;">
              © 2026 Node E-commarce. All rights reserved.
            </p>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
`;
const resetPassEmailTemp = ({ otp }) => {
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
                  <strong>Node E-commarce</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f0f2f4; padding:15px; text-align:center; font-size:12px; color:#777777;">
                <p style="margin:0;">
                  © 2026 Node E-commarce. All rights reserved.
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
module.exports = { emailTemp, resetPassEmailTemp };
