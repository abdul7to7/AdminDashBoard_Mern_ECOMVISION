const OverallStat = require("../models/OverallStatModel");
const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    res.status(201).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getSales };
