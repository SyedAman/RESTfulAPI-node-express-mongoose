// Bear model

const mongoose = require('mongoose');
const Schema = mongoose.schema;

const BearSchema = new Schema({
  name: String;
});

module.exports = mongoose.model('Bear', BearSchema);
