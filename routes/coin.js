const express = require('express');
const { getCoins, createCoin, updateCoin, deleteCoin } = require('../controllers/coin');

const router = express.Router();

router.get('/', getCoins);
router.post('/', createCoin);
router.patch('/:id', updateCoin);
router.delete('/:id', deleteCoin);

module.exports = router;