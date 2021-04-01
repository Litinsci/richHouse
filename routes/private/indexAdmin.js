const knex = require("../../db.js");
var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
    let result = await knex.select("*").from('News');
    res.render('private/adminPage',{baseNews:result});
});


module.exports = router;