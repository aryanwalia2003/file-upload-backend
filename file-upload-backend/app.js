const express = require("express");
const app = express();
const path = require("path");

const uploadRoute = require("./routes/upload");

// Middleware
app.use(express.json());

// Routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
