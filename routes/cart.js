var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cart = require('../models/Cart.js');

/* GET ALL CartS */
router.get('/', function(req, res, next) {
  Cart.find(function (err, carts) {
    if (err) return next(err);
    res.json(carts);
  });
});

/* GET SINGLE Cart BY ID */
router.get('/:id', function(req, res, next) {
  Cart.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Cart */
router.post('/', function(req, res, next) {
  Cart.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Cart */
router.put('/:id', function(req, res, next) {
  Cart.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Cart */
router.delete('/:id', function(req, res, next) {
  Cart.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
