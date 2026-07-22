const generateEmailTemplate = ({ name, email, phone, braceletSize, description }) => {
  const phoneDisplay = phone ? phone : 'Not Provided';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Custom Bracelet Request</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .header { background-color: #4a4a4a; color: #ffffff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { padding: 30px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #333333; margin-bottom: 5px; display: block; }
    .value { color: #666666; }
    .footer { background-color: #f5f5f5; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; color: #999999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Custom Bracelet Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">${email}</span>
      </div>
      <div class="field">
        <span class="label">Phone Number:</span>
        <span class="value">${phoneDisplay}</span>
      </div>
      <div class="field">
        <span class="label">Description:</span>
        <span class="value">${description}</span>
      </div>
    </div>
    <div class="footer">
      Fashionate - Custom Bracelet Request System
    </div>
  </div>
</body>
</html>
  `;
};

module.exports = { generateEmailTemplate };