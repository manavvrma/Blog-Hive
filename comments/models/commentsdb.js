const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  postId: String,
  content: String,
});


const Comment = mongoose.model('Comment', commentSchema);


module.exports = { Comment };
