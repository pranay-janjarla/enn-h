const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
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

// API route to get all projects
app.get("/api/projects", async (req, res, next) => {
  try {
    const projects = await Project.find({});
    res.json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
});

// API route to get project details by title
app.get("/api/projects/:title", async (req, res, next) => {
  try {
    const project = await Project.findOne({ title: req.params.title });
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
});

// Create new project
app.post("/api/projects", async (req, res, next) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json({ success: true, data: savedProject });
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
