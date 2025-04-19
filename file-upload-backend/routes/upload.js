const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerConfig");

// POST /upload (single file upload)
router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  res.status(200).json({
    message: "File uploaded successfully",
    file: {
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    },
  });
});

module.exports = router;
