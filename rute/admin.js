const path = require('path');
const express = require('express');

const bukaFile = require('../utility/path');


const router = express.Router();

const products = [];

router.get('/tambah-produk', (req, res, next) => {
    res.render('tambah-produk', { pageTitle: 'Tambahkan Produk' });
});

router.post('/tambah-produk', (req, res, next) => {
    products.push({ title: req.body.title, path: '/admin/tambah-produk' });
    res.redirect('/');

});

exports.routes = router;
exports.products = products;