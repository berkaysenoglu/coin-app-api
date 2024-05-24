const Coin = require('../models/Coin');

const getCoins = async (req, res) => {
  try {
    const coins = await Coin.find();
    res.status(200).json(coins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


const createCoin = async (req, res) => {
  const { name, price, image, tag } = req.body;

  const newCoin = new Coin({ name, price, image, tag });

  try {
    await newCoin.save();
    res.status(201).json(newCoin);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


const updateCoin = async (req, res) => {
  const { id } = req.params;
  const { name, price, image, tag } = req.body;

  try {
    const updatedCoin = await Coin.findByIdAndUpdate(id, { name, price, image, tag }, { new: true });
    res.status(200).json(updatedCoin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


const deleteCoin = async (req, res) => {
  const { id } = req.params;

  try {
    await Coin.findByIdAndRemove(id);
    res.status(200).json({ message: 'Coin deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getCoins, createCoin, updateCoin, deleteCoin };