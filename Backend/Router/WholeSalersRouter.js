const express = require('express');
const { postWholeSignUp, postWholeLoginShop, postWholeIsLoggedin, postWholeAddProduct, postWholeLogOut, postGetShopNameById } = require('../controllers/WholeSalers');
const postWholeSignUpRouter = express.Router();
const postWholeLoginShopRouter = express.Router();
const postWholeIsLoggedinRouter = express.Router();
const postWholeAddProductRouter = express.Router();
const postWholeLogOutRouter = express.Router();
const postGetShopNameByIdRouter = express.Router();

postWholeSignUpRouter.post('/', postWholeSignUp);
postWholeLoginShopRouter.post('/', postWholeLoginShop);
postWholeIsLoggedinRouter.post('/', postWholeIsLoggedin)
postWholeAddProductRouter.post('/', postWholeAddProduct)
postWholeLogOutRouter.post('/', postWholeLogOut)
postGetShopNameByIdRouter.post('/', postGetShopNameById)

exports.postWholeSignUpRouter = postWholeSignUpRouter;
exports.postWholeLoginShopRouter = postWholeLoginShopRouter;
exports.postWholeIsLoggedinRouter = postWholeIsLoggedinRouter;
exports.postWholeAddProductRouter = postWholeAddProductRouter;
exports.postWholeLogOutRouter = postWholeLogOutRouter;
exports.postGetShopNameByIdRouter = postGetShopNameByIdRouter;