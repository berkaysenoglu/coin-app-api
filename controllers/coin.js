const Coin = require('../models/Coin');

const getCoins = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const skip = (page - 1) * limit;

    // Query object
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { tag: { $regex: search, $options: 'i' } }
          ]
        }
      : {};

    const coins = await Coin.find(query).skip(skip).limit(parseInt(limit));
    const total = await Coin.countDocuments(query);

    res.json({
      coins,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).send(error.message);
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
    await Coin.findByIdAndDelete(id);

    
    let page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const total = await Coin.countDocuments();

    if (skip >= total && page > 1) {
      
      page--;

      
      const newSkip = (page - 1) * limit;

      
      const coins = await Coin.find().skip(newSkip).limit(limit);

      res.json({
        coins,
        total,
        page,
        pages: Math.ceil(total / limit),
      });
    } else {
      
      const coins = await Coin.find().skip(skip).limit(limit);

      res.json({
        coins,
        total,
        page,
        pages: Math.ceil(total / limit),
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getCoins, createCoin, updateCoin, deleteCoin };
