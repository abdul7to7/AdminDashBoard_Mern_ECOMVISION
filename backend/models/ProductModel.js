const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    //this should be required in production
    name: String,
    price: Number,
    descrition: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
