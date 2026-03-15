const express = require('express');
const { postShopSignup } = require('../controllers/ShopController');
const postShopSignupRouter = express.Router();

postShopSignupRouter.post('/', postShopSignup);

exports.postShopSignupRouter = postShopSignupRouter;