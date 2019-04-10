const express = require("express")
const Router = express.Router();
const userModel = require('../model/userModel')
const utils = require('../utils/utils')

//注册接口
Router.post('/reg',(req,res)=>{
    console.log("注册页面传送过来的账号密码",req.body)
    // console.log("注册页面传送过来的账号",req.body.regZh)
    let { regZh, regMm } = req.body
    userModel.find({username:regZh})
    .then((data)=>{
        console.log('-------------注册查询语句执行过后获取data---------------',data)
        console.log(data.length)
        if(data.length == 0){
            userModel.insertMany({username:regZh,password:regMm})
            res.send(utils.sendData(0,'注册成功',null))
        }else{
            res.send(utils.sendData(-1,'注册失败',null))
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})

//登录接口
Router.post('/login',(req,res)=>{
    console.log("登录页面传送过来的账号密码",req.body)
    let { loginZh,loginMm } = req.body
    userModel.find({username:loginZh,password:loginMm})
    .then((data)=>{
        console.log('-------------登录查询语句执行过后获取data---------------',data)
        console.log(data.length)
        if(data.length == 1){
            res.send(utils.sendData(0,'登录成功',null))
        }else {
            res.send(utils.sendData(-1,'登录失败',null))
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})


//接口路由模块抛出
module.exports = Router;