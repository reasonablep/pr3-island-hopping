const mongoose = require('mongoose');

const { Schema } = mongoose;

const islandSchema = new Schema({
  islandName: {
    type: String,
    required: true,
    trim: true
  },
  islandDescription: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,

  },
  price: {
    type: Number,
    required: true,
    min: 1000,
  },
  // quantity: {
  //   type: Number,
  //   min: 0,
  //   default: 0
  // },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
