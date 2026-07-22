const validateBraceletRequest = (req, res, next) => {
  const { name, email, phone, description } = req.body;
  const errors = {};

  // Name is optional - only validate if provided
  if (name && (name.length < 2 || name.length > 100)) {
    errors.name = 'Name must be between 2 and 100 characters';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Email must be valid';
    }
  }

  if (phone && (phone.length < 10 || phone.length > 15)) {
    errors.phone = 'Phone length should be between 10 and 15 characters';
  }

  if (!description) {
    errors.description = 'Description is required';
  } else if (description.length < 10) {
    errors.description = 'Description should contain at least 10 characters';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors
    });
  }

  next();
};

module.exports = { validateBraceletRequest };
