require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose")
const { postShopSignupRouter } = require('./Router/ShopeRouter');
const app = express();
const DB_URL = process.env.DB_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}))
app.use('/api/shop/signup', postShopSignupRouter)
mongoose.connect(DB_URL).then(() => {
  console.log("mongoose connected");
  app.listen(3000, () => {
    console.log(`http://localhost:3000`)
  })
})
