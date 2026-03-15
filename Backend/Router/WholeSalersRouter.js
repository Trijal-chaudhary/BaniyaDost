const express = require('express');
const { postWholeSignUp, postWholeLoginShop, postWholeIsLoggedin, postWholeAddProduct } = require('../controllers/WholeSalers');
const postWholeSignUpRouter = express.Router();
const postWholeLoginShopRouter = express.Router();
const postWholeIsLoggedinRouter = express.Router();
const postWholeAddProductRouter = express.Router();

postWholeSignUpRouter.post('/', postWholeSignUp);
postWholeLoginShopRouter.post('/', postWholeLoginShop);
postWholeIsLoggedinRouter.post('/', postWholeIsLoggedin)
postWholeAddProductRouter.post('/', postWholeAddProduct)

exports.postWholeSignUpRouter = postWholeSignUpRouter;
exports.postWholeLoginShopRouter = postWholeLoginShopRouter;
exports.postWholeIsLoggedinRouter = postWholeIsLoggedinRouter;
exports.postWholeAddProductRouter = postWholeAddProductRouter;