const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Set the port for the server

app.use(express.json());
app.use(express.static("public")); // Serve static files from the public directory

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Project model
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  peopleWorked: { type: [String], required: true },
  images: { type: [String], required: true },
  location: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);

// API route to get project details
app.get("/api/projects/:title", async (req, res) => {
  try {
    const project = await Project.findOne({ title: req.params.title });
    if (!project) return res.status(404).send("Project not found");
    res.json(project);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
