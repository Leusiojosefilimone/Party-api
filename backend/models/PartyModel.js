const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const { Schema } = mogoose;
const { serviceSchema } = require('./serviceModel');

const partySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestamps: true },
);

const PartyModel = mongoose.model('party', partySchema);
module.exports = PartyModel;
