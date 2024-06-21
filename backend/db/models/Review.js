const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  breweryId: String,
  review: String,
  rating: Number,
});

module.exports = mongoose.model('Review', reviewSchema);
