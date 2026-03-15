exports.postShopSignup = (req, res) => {
  console.log(req.body);
  res.status(200).json({ Message: "hello" })
}