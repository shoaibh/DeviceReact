const mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      count: {
        type: Number,
      },
    },
  ],
  address: {
    type: String,
    required: true,
    maxlength: 50,
  },
  amount: {
    type: Number,
  },
  transaction_id: {},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  updated: {
    type: Date,
  },
});
module.exports = mongoose.model("Order", orderSchema);
