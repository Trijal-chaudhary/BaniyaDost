const ShopKeeperDetails = require('../models/ShopDetails')
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
    req.session.id = details._id;
    res.status(201).json({ message: "found" });
  } else {
    res.status(200).json({ message: "notFound" })
  }
}