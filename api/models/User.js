// User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  user_name: {
    type: String
  },
  user_email: {
    type: String
  },
  user_password: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);