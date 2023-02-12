const mongoose = require('mongoose');

const { Schema } = mongoose;
const serviceSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ServiceModel = mongoose.model('Service', serviceSchema);

module.exports = {
  serviceSchema,
  ServiceModel,
};
