const transporter = require('../config/emailConfig');
const { generateEmailTemplate } = require('../utils/emailTemplate');

const sendBraceletRequestEmail = async (data) => {
  const { name, email, phone, braceletSize, description, image } = data;

  const htmlContent = generateEmailTemplate({
    name,
    email,
    phone,
    braceletSize,
    description
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Custom Bracelet Request',
    html: htmlContent,
    attachments: image ? [
      {
        filename: image.originalname,
        path: image.path
      }
    ] : []
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

module.exports = { sendBraceletRequestEmail };