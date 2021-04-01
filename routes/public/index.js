const knex = require("../../db.js");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let News = await knex.select("*").from('News');
  let Shares = await knex.select("*").from('Shares');
  res.render('public/index',{
    News : News,
    Shares : Shares
  });
});

router.get('/project', function(req, res, next) {
  res.render('public/project');
});

router.get('/commercial', function(req, res, next) {
  res.render('public/commercial');
});

router.get('/builtHouse', function(req, res, next) {
  res.render('public/builtHouse');
});

router.get('/NewsAndShares', function(req, res, next) {
  res.render('public/NewsAndShares');
});

router.get('/NewsOrShares', function(req, res, next) {
  res.render('public/NewsOrShares');
});

router.get('/questionAnswer', function(req, res, next) {
  res.render('public/questionAnswer');
});

// kontacts
router.get('/kontacts', function(req, res, next) {
  res.render('public/kontacts');
});

router.get('/test', function(req, res, next) {
  res.render('public/test');
});

module.exports = router;
