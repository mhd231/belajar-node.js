const express = require('express');

const app = express();

app.use();

app.use('/tambah-produk', (req, res, next) => {
    res.send('<form action="/produk" method="POST"><input type="text" name="title"><button type="submit">Tambahkan produk</button></form>')
});

app.use('/produk', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello From Express</h1>')
});

app.listen(2000);