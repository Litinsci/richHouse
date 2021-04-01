var mysql = require('mysql');
const knex = require("../../db.js");
var express = require('express');
var session = require('express-session');
let findeUser = require('../../module/findeUser');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('private/admin');
});

router.post('/login', async function (req, res, next) {
    const {login, password} = req.body;
    const [user] = await knex.select("*").from('Users').where('login',login);

    if (user && password == user.password) {
        req.session.nameUser = "admin";
        res.end();
    } else {
        res.status(400).end();
    }
});


module.exports = router;