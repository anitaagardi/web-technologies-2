const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Product = new Schema({
  name: {
    type: String
  },
  amount: {
    type: Number
  },
  cost: {
    type: Number
  }
}, {
  collection: 'products'
})

module.exports = mongoose.model('Product', Product)
