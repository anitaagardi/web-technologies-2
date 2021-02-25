const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },

  },
  {
    collection: 'users'
  });

const User =  module.exports = mongoose.model("User", userSchema, 'users');
