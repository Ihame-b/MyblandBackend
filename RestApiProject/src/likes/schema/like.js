const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true

  },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'messages',
    required: true
  }

}, {
  timestamps: true
});
const Like = mongoose.model('Like', likeSchema);
module.exports = Like;