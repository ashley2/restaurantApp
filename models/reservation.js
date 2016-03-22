'use strict';

var mongoose = require('mongoose');

var ReservSchema = mongoose.Schema({
  last:  {type: String, required:true},
  first: {type: String },
  time: {type: Date, required:true},
  date: {type: Number, required:true},
  checkedIn: {type: Boolean, default:false},
  seats: {type: Number, required:true},
  notes: {type: String}
});

module.exports = mongoose.model("Reserv", ReservSchema)