const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('../models/Project');
const places = require('./projectData');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedDB = async () => {
  try {
    // Clear existing projects
    await Project.deleteMany({});
    
    // Insert new projects
    await Project.insertMany(places);
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDB();