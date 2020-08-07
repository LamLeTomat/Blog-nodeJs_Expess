const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    description: String,
    image: Date,
    createAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

  module.exports = mongoose.model('Course', Course);