'use strict';

var mongoose = require('mongoose');

var ResSchema = mongoose.Schema({
  last:  {type: String, required:true},
  first: {type: String },
  time: {type: Date, required:true},
  checkedIn: {type: Boolean },
  partySize: {type: Number, required:true},
  notes: {type: String}
});

module.exports = mongoose.model("Res", ResSchema)