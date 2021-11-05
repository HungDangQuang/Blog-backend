const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    
    expires: {
      type: Date,
      required: true,
    },
  },
);

module.exports = mongoose.model('token', tokenSchema)