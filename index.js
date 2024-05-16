const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const db = require("./config/database")

const Auth = require("./routes/auth.js")

const app = express()
app.use(cors())
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
const PORT = process.env.PORT || 5000;

dotenv.config()
app.use("/", Auth)
app.get("/",(req,res) => {
    res.json({message : "deneme deneme"})
})
db()
app.listen( PORT, () => {
    console.log("server is running on port : 5000")
})
