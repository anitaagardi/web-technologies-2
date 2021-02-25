const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Vehicle = new Schema({
  type: {
    type: String
  },
  manufacturer: {
    type: String
  },
  plate: {
    type: String
  },
  vin: {
    type: String
  },
  acquired: {
    type: Date
  },
  rentalFee: {
    type: Number
  },
  miles: {
    type: Number
  },
  status: {
    type: String,
    enum: ["AVAILABLE", "RENTED", "RETIRED"],
    default: "AVAILABLE"
  }
}, {
  collection: 'vehicles'
})

module.exports = mongoose.model('Vehicle', Vehicle)
