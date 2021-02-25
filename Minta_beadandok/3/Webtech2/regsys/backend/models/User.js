const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
  name: {
    type: String
  },
  userName: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  bDate: {
    type: Date
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('users', User)
