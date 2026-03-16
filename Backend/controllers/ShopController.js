const ShopKeeperDetails = require('../models/ShopDetails')
const WholeSalersDetails = require("../models/WholeSalers");
exports.postShopSignup = async (req, res) => {
  console.log(req.body.data);
  const details = ShopKeeperDetails({
    details: req.body.data
  })
  await details.save()
  res.status(200).json({ Message: "hello" })
}
exports.postLoginShop = async (req, res) => {
  const { password, username } = req.body.data;
  // console.log(password, username);
  const details = await ShopKeeperDetails.findOne({ "details.password": password, "details.username": username })
  console.log(details._id)
  if (details) {
    req.session.isLogged = true;
    req.session.userId = details._id.toString();
    req.session.who = "shop"
    req.session.save((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "session error" });
      }
      res.status(201).json({ message: "found" });
    });
  } else {
    res.status(200).json({ message: "notFound" })
  }
}
exports.postisLogged = async (req, res) => {
  console.log(req.body, req.session.userId, req.session.isLogged);
  if (req.session.isLogged && req.session.who == "shop") {
    const details = await ShopKeeperDetails.findById(req.session.userId)
    console.log(details);
    res.status(201).json({ message: "yes", details: details });
  } else {
    res.status(201).json({ message: "no" })
  }

}
exports.postWholeSalersDetails = async (req, res) => {
  // console.log(req.body);
  const wholeDetails = await WholeSalersDetails.find();
  res.status(201).json({ details: wholeDetails });
}
exports.postWholeDetailsById = async (req, res) => {
  // const details = 
  console.log(req.body)
  res.status(201).json({ message: "hello" });
}