const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  islands: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Island'
    }
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},

{
  timestamps: true,
}

);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
