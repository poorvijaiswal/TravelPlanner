const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  // Add other fields as needed
});

const City = mongoose.model('City', citySchema);
module.exports = City;