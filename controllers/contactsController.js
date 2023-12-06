// controllers/publicContactsController.js
const nodemailer = require('nodemailer');

async function sendPublicEmail(req, res) {
  const { name, email, message } = req.body;

  try {
    // استخدم نوعًا من الاتصال بالبريد الإلكتروني الذي تريده
    const transporter = nodemailer.createTransport({
      // تكوين خوادم البريد الإلكتروني هنا
      // ...
    });

    const mailOptions = {
      from: "mahaalkaabneh1997@gmail.com", // البريد الإلكتروني الخاص بك
      to: email,
      subject: "replay",
      text: "شكرًا لتواصلك معنا. سنقوم بالرد في أقرب وقت ممكن.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error sending email', error);
        res.status(500).json({ message: 'Failed to send email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
  } catch (error) {
    console.error('Error processing contact form', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  sendPublicEmail,
};
