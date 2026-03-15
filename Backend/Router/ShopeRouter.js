const express = require('express');
const { postShopSignup, postLoginShop } = require('../controllers/ShopController');
const postShopSignupRouter = express.Router();
const postLoginShopRouter = express.Router();

postShopSignupRouter.post('/', postShopSignup);
postLoginShopRouter.post('/', postLoginShop);

exports.postShopSignupRouter = postShopSignupRouter;
exports.postLoginShopRouter = postLoginShopRouter;