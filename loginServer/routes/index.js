/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    errCode: "0",
    msg: "Index",
    data: []
  });
});

module.exports = router;
