const nodemailer = require('nodemailer');

// Create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'wafacamera@yahoo.fr',
    pass: '0000000000'
  }
});

// Define the email options
const mailOptions = {
  from: 'wafacamera@yahoo.fr',
  to: 'wafacamera@yahoo.fr',
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
