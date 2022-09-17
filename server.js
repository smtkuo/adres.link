const express = require("express");
const app = express()
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const mongo = require('mongodb');
var router = require('./router')

/* ROUTER */
app.set('view engine', 'ejs')
app.use(express.static('public'))  
app.get('/', router.home);
app.get('/search', router.search);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`server is listening on port:http://localhost:${PORT}`)
);