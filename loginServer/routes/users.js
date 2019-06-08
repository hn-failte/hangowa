/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();
var mongo = require("../utils/mongoUtil");
var jwt = require('jsonwebtoken')

router.get('/', function (req, res) {
  jwt.verify(req.cookies.tk, "failte", function (err, decode) {
    if (!err) {
      res.end("Welcome, " + decode.name);
    } else {
      res.end("Please Login");
    }
  })
})

router.post('/login', function (req, res, next) { //登录
  let obj = convertQuery(req, res);
  if (!obj) { //必要信息不符合要求
    res.json({
      errCode: 1,
      msg: "Info Required",
      data: []
    })
    return;
  }
  mongo.getUser(obj.name, (err, data) => {
    if (!err) {
      if (obj.pwd === data.pwd) { //登录成功
        var token = jwt.sign({
            "name": req.query.name
          },
          "failte", {
            algorithm: "HS256", //默认HS256
            expiresIn: '3d' //过期时间，值为数字，单位毫秒，也可以是字符串"1h"/"1d"
          }
        )

        res.cookie("tk", token, {
          expires: new Date(Date.now() + 24 * 3600000),
          maxAge: "1200000",
          domain: "localhost",
          path: "/",
          httpOnly: true
        })
        res.json({
          errCode: 0,
          msg: "ok",
          data: {tk: token}
        })
      } else //密码错误
        res.json({
          errCode: 1,
          msg: "pwd err",
          data: []
        })
    } else
      res.json({
        errCode: 1,
        msg: "err",
        data: err
      })
  })
})

router.post('/register', function (req, res, next) { //注册
  let obj = convertQuery(req, res);
  if (!obj) //注册信息不全
    res.json({
      errCode: 1,
      msg: "Need More Info",
      data: []
    });
  mongo.insUser(obj, function (err, doc) { //注册成功
    if (!err) res.json({
      errCode: 0,
      msg: "ok",
      data: []
    });
    else res.json({ //注册失败
      errCode: 1,
      msg: "failed",
      data: []
    })
  })
});

// router.get('/updateInfo', function(){ //登录
//   let query = req.query;
//   mongo.updUser()
// })

function convertQuery(req, res) {
  let body = req.body;
  let obj = {
    phone: body.phone || "",
    email: body.email || "",
    name: body.name || "",
    pwd: body.pwd || ""
  }
  if (!/^[a-zA-Z0-9_-]{3,20}$/.test(obj.name) || !/^[a-zA-Z0-9_-]{6,20}$/.test(obj.pwd)) {
    return false;
  }
  return obj;
}
module.exports = router;