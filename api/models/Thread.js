// Thread.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Thread
let Thread = new Schema({
  thread_title: {
    type: String
  },
  thread_category: {
    type: String
  } 
  ,
  thread_posts: {
    post_description: String,
    user_id: String,    
    post_id: String,
    post_created: Number
  }
},{
    collection: 'thread'
});

module.exports = mongoose.model('Thread', Thread);