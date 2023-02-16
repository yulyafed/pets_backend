const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: false,
    },
    breed: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    theSex: {
      type: String,
      enum: ['male', 'female'],
    },
    comments: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['lost/found', 'in good hands', 'sell'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Notice = mongoose.model('notice', noticeSchema);

module.exports = Notice;