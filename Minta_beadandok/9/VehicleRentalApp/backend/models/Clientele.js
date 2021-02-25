const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Clientele = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  Rentals: []
}, {
  collection: 'clientele'
})

module.exports = mongoose.model('Clientele', Clientele)
