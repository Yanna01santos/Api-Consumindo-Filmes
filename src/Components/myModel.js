const mongoose = require('mongoose');

const myModelSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model('MyModel', myModelSchema);
