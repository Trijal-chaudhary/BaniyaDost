require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose")
const session = require("express-session");
const { postShopSignupRouter, postLoginShopRouter, postisLoggedRouter, postWholeSalersDetailsRouter, postWholeDetailsByIdRouter, postProductOrderRouter, postShopLoggedoutRouter } = require('./Router/ShopeRouter');
const { postWholeSignUpRouter, postWholeLoginShopRouter, postWholeIsLoggedinRouter, postWholeAddProductRouter, postWholeLogOutRouter, postGetShopNameByIdRouter } = require('./Router/WholeSalersRouter');
const app = express();
const DB_URL = process.env.DB_URL;
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: DB_URL,
  collection: "session",
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "https://baniyadost-shop.vercel.app"],
  credentials: true
}))
app.use(session({
  name: "BaniyaDost",
  secret: "the_is_baniyadost",
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 5
  }
}))
app.use('/api/shop/signup', postShopSignupRouter)
app.use('/api/shop/login', postLoginShopRouter);
app.use('/api/shop/islogged', postisLoggedRouter);
app.use('/api/shop/wholedetails', postWholeSalersDetailsRouter);
app.use('/api/shop/loggedout', postShopLoggedoutRouter)
app.use('/api/whole/wholebyid', postWholeDetailsByIdRouter)
app.use('/api/shop/orderproduct', postProductOrderRouter)
app.use('/api/whole/signup', postWholeSignUpRouter);
app.use('/api/whole/login', postWholeLoginShopRouter)
app.use('/api/whole/isLogged', postWholeIsLoggedinRouter)
app.use('/api/whole/addproduct', postWholeAddProductRouter);
app.use('/api/whole/logout', postWholeLogOutRouter)
app.use('/api/whole/getshopbyid', postGetShopNameByIdRouter)
mongoose.connect(DB_URL).then(() => {
  console.log("mongoose connected");
  app.listen(3000, () => {
    console.log(`http://localhost:3000`)
  })
})
