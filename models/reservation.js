'use strict';

var mongoose = require('mongoose');

var ReservSchema = mongoose.Schema({
  last:  {type: String, required:true},
  first: {type: String },
  time: {type: Number, required:true},
  date: {type: Date, required:true},
  checked: {type: Boolean, default:false},
  seats: {type: Number, required:true},
  notes: {type: String}
});

module.exports = mongoose.model("Reserv", ReservSchema)