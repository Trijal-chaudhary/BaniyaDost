const express = require('express');
const cors = require("cors");
const { postShopSignupRouter } = require('./Router/ShopeRouter');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}))
app.use('/api/shop/signup', postShopSignupRouter)
app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})