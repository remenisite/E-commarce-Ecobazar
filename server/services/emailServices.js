const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const sendEmail = async ({ email, subject, otp , template }) => {
  await transporter.sendMail({
    from: `"Node.jsE-commarce" ${process.env.APP_EMAIL}`,
    to: email,
    subject:"Email Verification",
    html: template({otp}),
  });
};

module.exports = { sendEmail };
