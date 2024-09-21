const Notification = require("../models/Notification");
const { sendEmail } = require("../services/emailService");

const notifyByEmail = async (req, res) => {
  const { recipient, subject, message } = req.body;

  try {
    const notification = new Notification({
      type: "email",
      recipient,
      message,
    });

    await notification.save();

    await sendEmail(recipient, subject, message);

    notification.status = "sent";
    notification.sentAt = Date.now();
    await notification.save();

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};

// Future notification methods for popup and in-app notifications can go here

module.exports = { notifyByEmail };
