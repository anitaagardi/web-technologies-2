const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  employeeId: {
    type: String
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', User)
