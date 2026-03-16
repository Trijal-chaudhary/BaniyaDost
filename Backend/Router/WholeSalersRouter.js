const express = require('express');
const { postWholeSignUp, postWholeLoginShop, postWholeIsLoggedin, postWholeAddProduct, postWholeLogOut } = require('../controllers/WholeSalers');
const postWholeSignUpRouter = express.Router();
const postWholeLoginShopRouter = express.Router();
const postWholeIsLoggedinRouter = express.Router();
const postWholeAddProductRouter = express.Router();
const postWholeLogOutRouter = express.Router();

postWholeSignUpRouter.post('/', postWholeSignUp);
postWholeLoginShopRouter.post('/', postWholeLoginShop);
postWholeIsLoggedinRouter.post('/', postWholeIsLoggedin)
postWholeAddProductRouter.post('/', postWholeAddProduct)
postWholeLogOutRouter.post('/', postWholeLogOut)
exports.postWholeSignUpRouter = postWholeSignUpRouter;
exports.postWholeLoginShopRouter = postWholeLoginShopRouter;
exports.postWholeIsLoggedinRouter = postWholeIsLoggedinRouter;
exports.postWholeAddProductRouter = postWholeAddProductRouter;
exports.postWholeLogOutRouter = postWholeLogOutRouter;