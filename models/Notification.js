const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 'email', 'popup', 'inapp'
  recipient: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: "pending" }, // 'pending', 'sent', 'failed'
  createdAt: { type: Date, default: Date.now },
  sentAt: { type: Date },
});

module.exports = mongoose.model("Notification", notificationSchema);
