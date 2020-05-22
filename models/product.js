const mongoose = require("mongoose");

var productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
    specs: [
      {
        type: String,
        maxlength: 1000,
        required: true,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    ratings: {
      type: Decimal128,
      maxlength: 10,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    photo: {
      type: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
