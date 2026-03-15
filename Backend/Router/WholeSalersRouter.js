const express = require('express');
const { postWholeSignUp, postWholeLoginShop, postWholeIsLoggedin } = require('../controllers/WholeSalers');
const postWholeSignUpRouter = express.Router();
const postWholeLoginShopRouter = express.Router();
const postWholeIsLoggedinRouter = express.Router();

postWholeSignUpRouter.post('/', postWholeSignUp);
postWholeLoginShopRouter.post('/', postWholeLoginShop);
postWholeIsLoggedinRouter.post('/', postWholeIsLoggedin)

exports.postWholeSignUpRouter = postWholeSignUpRouter;
exports.postWholeLoginShopRouter = postWholeLoginShopRouter;
exports.postWholeIsLoggedinRouter = postWholeIsLoggedinRouter;