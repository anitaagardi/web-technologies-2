const mongoose = require('mongoose');

const manufacturerSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Country: { type: String, required: true },
  Founded: { type: String, required: true}
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema);
