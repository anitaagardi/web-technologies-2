const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Consumption: { type: String, required: true },
  Color: { type: String, required: true },
  Manufacturer: { type: String, required: true },
  Available: { type: String, required: true },
  Year: { type: String, required: true },
  Horsepower: { type: String, required: true }
});

module.exports = mongoose.model("Car", carSchema);
