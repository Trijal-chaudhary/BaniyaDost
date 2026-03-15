const ShopKeeperDetails = require('../models/ShopDetails')
exports.postShopSignup = async (req, res) => {
  console.log(req.body.data);
  const details = ShopKeeperDetails({
    details: req.body.data
  })
  await details.save()
  res.status(200).json({ Message: "hello" })
}