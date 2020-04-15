const path = require('path');

const express = require('express');


const bukaFile = require('../utility/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { prods: products, pageTitle: 'shop', path: '/' });
});

module.exports = router;