const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);
// Routes
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/certifications", require("./routes/certificationRoutes"));
app.use("/api/qualifications", require("./routes/qualificationRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
console.log("URI:", process.env.MONGO_URI);