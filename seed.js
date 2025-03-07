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
    return Project.deleteMany({}); // Clear existing data using Mongoose
  })
  .then(() => {
    return Project.insertMany([
      {
        title: "Hyderabad",
        description: "A beautiful city in India.",
        peopleWorked: ["Alice", "Bob"],
        images: [
          "/images/hero.png",
          "/images/victor-wJ4kpIZOjtE-unsplash.jpg",
          "/images/landing-carousel-image-4.png",
        ],
        location: "Hyderabad, India",
      },
      {
        title: "Vijayawada",
        description: "Description for Vijayawada.",
        peopleWorked: ["Person C", "Person D"],
        images: [
          "/images/landing-carousel-image-1.png",
          "/images/landing-carousel-image-2.jpg",
          "/images/landing-carousel-image-3.png",
        ],
        location: "Vijayawada, India",
      },
      {
        title: "Vizag",
        description: "Description for Vizag.",
        peopleWorked: ["Person E", "Person F"],
        images: [
          "/images/landing-carousel-image-4.png",
          "/images/landing-carousel-image-5.png",
          "/images/landing-carousel-image-6.png",
        ],
        location: "Vizag, India",
      },
    ]);
  })
  .then(() => {
    console.log("Sample project created");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error:", err);
    mongoose.connection.close();
  });
