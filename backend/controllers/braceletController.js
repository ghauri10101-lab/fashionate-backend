const { sendBraceletRequestEmail } = require('../services/emailService');

const submitBraceletRequest = async (req, res) => {
  try {
    const { name, email, phone, braceletSize, description } = req.body;

    // Name is optional, only email and description are required
    if (!email || !description) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }

    const imageData = req.file ? {
      originalname: req.file.originalname,
      path: req.file.path
    } : null;

    await sendBraceletRequestEmail({
      name,
      email,
      phone,
      braceletSize,
      description,
      image: imageData
    });

    res.status(200).json({
      success: true,
      message: 'Your bracelet request has been submitted successfully.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { submitBraceletRequest };
