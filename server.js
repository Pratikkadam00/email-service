const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const notifyRoutes = require("./routes/notifyRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/notify", notifyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});