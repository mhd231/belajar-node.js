const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'html');

const adminData = require('./rute/admin');
const shopRoutes = require('./rute/shop');


app.use(bodyParser.urlencoded({ extended: false }));

console.log(adminData);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('gaketemu', { pageTitle: 'Halaman Tidak Ditemukan' });
});

app.listen(2000);