const express = require("express");
const router = express.Router();
const { notifyByEmail } = require("../controllers/notifyController");

// Email notification route
router.post("/mail-notify", notifyByEmail);

// Placeholder for future notification routes (popup, in-app)
router.post("/popup-notify", (req, res) => {
  res
    .status(200)
    .json({ message: "Popup notification service is under development" });
});

router.post("/inapp-notify", (req, res) => {
  res
    .status(200)
    .json({ message: "In-app notification service is under development" });
});

module.exports = router;
