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
  ]
},

{
  timestamps: true,
}

);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
