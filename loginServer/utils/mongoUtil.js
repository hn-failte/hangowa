/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/failte", err=>console.log(err?err:"connect ok"))

const schema = new mongoose.Schema({
    phone: String,
    email: String,
    name:  {
        type: String,
        required: true,
        unique: true
    },
    pwd:  {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("userModel", schema, "userModel")

function insUser(obj, callback) { //插入用户
    let doc = new userModel(obj)
    doc.save(function(err, doc){
        callback(err, doc)
    })
}

function getUser(name, callback) { //获取用户
    userModel.findOne({name: name}, (err, res)=>{ //手机号唯一，只查找一个用户
        callback(err, res)
    })
}

function updUser(name, obj, callback) {
    userModel.update({name: name}, obj, function(err, doc){
        callback(err, doc);
    })
}

module.exports = {
    insUser,
    getUser,
    updUser
}