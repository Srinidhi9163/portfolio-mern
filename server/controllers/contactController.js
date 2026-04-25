const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // validation
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    if (!/^\d{10}$/.test(mobile)) {
      return res.status(400).json({ error: "Mobile must be 10 digits" });
    }

    const newMsg = new Message({ name, email, mobile, message });
    await newMsg.save();

    res.status(201).json({ success: "Message saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};