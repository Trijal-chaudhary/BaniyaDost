const express = require('express');
const { postShopSignup, postLoginShop, postisLogged, postWholeSalersDetails, postWholeDetailsById } = require('../controllers/ShopController');
const postShopSignupRouter = express.Router();
const postLoginShopRouter = express.Router();
const postisLoggedRouter = express.Router();
const postWholeSalersDetailsRouter = express.Router();
const postWholeDetailsByIdRouter = express.Router();

postShopSignupRouter.post('/', postShopSignup);
postLoginShopRouter.post('/', postLoginShop);
postisLoggedRouter.post('/', postisLogged);
postWholeSalersDetailsRouter.post('/', postWholeSalersDetails)
postWholeDetailsByIdRouter.post('/', postWholeDetailsById);

exports.postShopSignupRouter = postShopSignupRouter;
exports.postLoginShopRouter = postLoginShopRouter;
exports.postisLoggedRouter = postisLoggedRouter;
exports.postWholeSalersDetailsRouter = postWholeSalersDetailsRouter;
exports.postWholeDetailsByIdRouter = postWholeDetailsByIdRouter