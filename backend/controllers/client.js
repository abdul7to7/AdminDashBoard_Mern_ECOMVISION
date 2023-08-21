const Product = require("../models/ProductModel");
const ProductStat = require("../models/ProductStatModel");
const Transaction = require("../models/TransactionModel");
const User = require("../models/UserModel");
const getCountryIso3 = require("country-iso-2-to-3");

const getProducts = async (req, res) => {
  try {
    //Use Aggregate fxn instead of thi shit
    const products = await Product.find();
    const productStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productStats);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTransactions = async (req, res) => {
  try {
    const { page = 0, pageSize = 20, sort = null, search = "" } = req.query;

    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const regex = new RegExp(search, "i");

    const transactions = await Transaction.find({
      $or: [{ cost: { $regex: regex } }, { userId: { $regex: regex } }],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      $or: [{ cost: { $regex: regex } }, { userId: { $regex: regex } }],
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});
    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );
    res.status(201).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getProducts, getCustomers, getTransactions, getGeography };
