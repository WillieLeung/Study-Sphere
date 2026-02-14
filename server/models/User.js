const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  age: { type: Number, required: true},
  sex: { type: String, required: true},
  major: { type: String, required: true},
  school: { type: String, required: true},
  city: { type: String, required: true},
  province: { type: String, required: true},
  country: { type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);