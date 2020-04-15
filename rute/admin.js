const path = require('path');
const express = require('express');

const bukaFile = require('../path/pat');


const router = express.Router();

const products = [];

router.get('/tambah-produk', (req, res, next) => {
    res.sendFile(path.join(bukaFile, 'html', 'tambah-produk.html'));
});

router.post('/tambah-produk', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;