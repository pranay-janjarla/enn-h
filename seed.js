const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Project = require("./models/Project");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    return Project.create({
      title: "Hyderabad",
      description: "A beautiful city in India.",
      peopleWorked: ["Alice", "Bob"],
      images: ["image1.jpg", "image2.jpg"],
      location: "India",
    });
  })
  .then(() => {
    console.log("Sample project created");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error:", err);
    mongoose.connection.close();
  });
