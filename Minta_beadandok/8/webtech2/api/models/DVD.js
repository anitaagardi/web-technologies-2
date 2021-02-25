const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;
let DVD = new Schema({
  title: {
    type: String,
    unique:true
  },
  dateOfGet: {
    type: Date,
    max: Date.now()
  },
  _id:{
    type: Number
  },
  state: {
    type: String,
    default: 'free'
  }
},{
  collection: 'dvd'
});

DVD.plugin(autoIncrement.plugin, {
  model: 'DVD',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

module.exports = mongoose.model('DVD', DVD);
