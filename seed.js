const mongoose = require('mongoose');
const Coin = require('./models/Coin');

const initialCoins = [
  { name: 'Bitcoin', price: 50000, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', tag: 'BTC' },
  { name: 'Ethereum', price: 3000, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', tag: 'ETH' },
  { name: 'Ripple', price: 1.5, image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png', tag: 'XRP' },
  { name: 'Litecoin', price: 200, image: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png', tag: 'LTC' },
  { name: 'Cardano', price: 2, image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png', tag: 'ADA' },
  { name: 'Polkadot', price: 30, image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png', tag: 'DOT' },
  { name: 'Chainlink', price: 25, image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png', tag: 'LINK' },
  { name: 'Stellar', price: 0.5, image: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png', tag: 'XLM' },
  { name: 'Dogecoin', price: 0.25, image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png', tag: 'DOGE' },
  { name: 'Uniswap', price: 20, image: 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png', tag: 'UNI' },
  { name: 'VeChain', price: 0.15, image: 'https://assets.coingecko.com/coins/images/3536/large/VeChain-Logo-3x.png', tag: 'VET' },
  { name: 'Solana', price: 45, image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', tag: 'SOL' },
  { name: 'Theta', price: 10, image: 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png', tag: 'THETA' },
  { name: 'TRON', price: 0.05, image: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png', tag: 'TRX' },
  { name: 'EOS', price: 5, image: 'https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png', tag: 'EOS' },
  { name: 'Monero', price: 250, image: 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png', tag: 'XMR' },
  { name: 'Tezos', price: 4, image: 'https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png', tag: 'XTZ' },
  { name: 'IOTA', price: 1, image: 'https://assets.coingecko.com/coins/images/692/large/IOTA_Swirl.png', tag: 'MIOTA' },
  { name: 'NEO', price: 50, image: 'https://assets.coingecko.com/coins/images/480/large/NEO_512_512.png', tag: 'NEO' },
  { name: 'Dash', price: 150, image: 'https://assets.coingecko.com/coins/images/19/large/dash-logo.png', tag: 'DASH' },
  { name: 'Zcash', price: 100, image: 'https://assets.coingecko.com/coins/images/486/large/zcash.png', tag: 'ZEC' },
  { name: 'Waves', price: 10, image: 'https://assets.coingecko.com/coins/images/425/large/waves.png', tag: 'WAVES' },
  { name: 'NEM', price: 0.2, image: 'https://assets.coingecko.com/coins/images/242/large/NEM_WC_Logo_200px.png', tag: 'XEM' },
  { name: 'Decred', price: 130, image: 'https://assets.coingecko.com/coins/images/329/large/decred.png', tag: 'DCR' },
  { name: 'Qtum', price: 10, image: 'https://assets.coingecko.com/coins/images/684/large/qtum.png', tag: 'QTUM' },
  { name: 'Ontology', price: 1, image: 'https://assets.coingecko.com/coins/images/3447/large/ONT.png', tag: 'ONT' },
  { name: 'ICON', price: 1.5, image: 'https://assets.coingecko.com/coins/images/1060/large/icon-ICX-logo.png', tag: 'ICX' },
  { name: '0x', price: 1.2, image: 'https://assets.coingecko.com/coins/images/863/large/0x.png', tag: 'ZRX' },
  { name: 'Basic Attention Token', price: 0.8, image: 'https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png', tag: 'BAT' }
];

const seedCoins = async () => {
  try {
    const coinCount = await Coin.countDocuments();
    if (coinCount === 0) {
      await Coin.insertMany(initialCoins);
      console.log('Coins have been seeded successfully');
    } else {
      console.log('Coins are already seeded');
    }
  } catch (error) {
    console.error('Error seeding coins:', error);
  }
};

module.exports = seedCoins;
