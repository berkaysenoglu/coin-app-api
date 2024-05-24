const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const db = require("./config/database")

const Auth = require("./routes/auth.js")
const Coin = require("./routes/coin.js");
const seedCoins = require('./seed');

const app = express()
app.use(cors())
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
const PORT = process.env.PORT || 5000;

dotenv.config()
app.use("/", Auth)
app.use("/coins", Coin);
app.get("/",(req,res) => {
    res.json({message : "deneme deneme"})
})
db().then(() => {
    seedCoins(); 
  });
app.listen( PORT, () => {
    console.log("server is running on port : 5000")
})
