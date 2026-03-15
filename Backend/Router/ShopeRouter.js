const express = require('express');
const { postShopSignup, postLoginShop, postisLogged } = require('../controllers/ShopController');
const postShopSignupRouter = express.Router();
const postLoginShopRouter = express.Router();
const postisLoggedRouter = express.Router();

postShopSignupRouter.post('/', postShopSignup);
postLoginShopRouter.post('/', postLoginShop);
postisLoggedRouter.post('/', postisLogged);

exports.postShopSignupRouter = postShopSignupRouter;
exports.postLoginShopRouter = postLoginShopRouter;
exports.postisLoggedRouter = postisLoggedRouter;