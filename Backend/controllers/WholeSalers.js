const WholeSalersDetails = require("../models/WholeSalers");
const ShopKeeperDetails = require('../models/ShopDetails')
exports.postWholeSignUp = async (req, res) => {
  // console.log(req.body);
  const details = await WholeSalersDetails({
    details: req.body.data
  })
  await details.save();
  res.status(200).json({ Message: "hello" })
}
exports.postWholeLoginShop = async (req, res) => {
  const { password, username } = req.body.data;
  // console.log(password, username);
  const details = await WholeSalersDetails.findOne({ "details.password": password, "details.username": username })
  // console.log(details._id)
  if (details) {
    req.session.isLogged = true;
    req.session.userId = details._id.toString();
    req.session.who = "whole";
    res.status(200).json({ message: "found" })
  } else {
    res.status(200).json({ message: "notFound" })
  }
}
exports.postWholeIsLoggedin = async (req, res) => {
  // console.log(req.body, req.session.isLogged);
  if (req.session.isLogged && req.session.who === "whole") {
    const details = await WholeSalersDetails.findById(req.session.userId)
    // console.log(details);
    res.status(200).json({ message: "yes", details })
  } else {
    res.status(200).json({ Message: "no" })
  }

}
exports.postWholeAddProduct = async (req, res) => {
  // console.log(req.body);
  const details = await WholeSalersDetails.findById(req.session.userId);
  details.Products.push(req.body.data);
  await details.save()
  res.status(200).json({ Message: "no" })
}
exports.postWholeLogOut = async (req, res) => {
  // console.log(req.body);
  await req.session.destroy();
  res.status(200).json({ message: "hello" })
}
exports.postGetShopNameById = async (req, res) => {
  const id = req.body.data;
  const details = await ShopKeeperDetails.findById(id);
  console.log(details.details.shopName)
  res.status(200).json({ name: details.details.shopName });
}