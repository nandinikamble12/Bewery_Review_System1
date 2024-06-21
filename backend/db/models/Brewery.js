const mongoose = require('mongoose');

const brewerySchema = new mongoose.Schema({
  name: String,
  brewery_type: String,
  street: String,
  city: String,
  state: String,
  phone: String,
  description: String,
});

module.exports = mongoose.model('Brewery', brewerySchema);
