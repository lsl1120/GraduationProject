const express = require("express")
const Router = express.Router();
const mail = require('../mail.js')
const utils = require('../utils/utils.js')
const userModel = require('../model/userModel')

let obj = {}

 /**
 * @api {post} /user/getcode 邮箱验证码
 * @apiName getcode
 * @apiGroup User
 *
 * @apiParam {String} email 用户邮箱.
 *  @apiParam {Number} num 生成验证码.
 *
 * @apiSuccess {String} err 邮箱错误.
 * @apiSuccess {String} msg  返回的信息.
 */

//获取邮箱验证码
// Router.post('/getcode',(req,res)=>{
// 	let{email} = req.body
// //	console.log(email)
// 	if(!email || email == ''){
// 		return res.send(utils.sendData(-1,'邮箱错误，请重新输入邮箱',null))
// 	}
	
// 	//生成随机验证码
// 	let num = (parseInt(Math.random(0,1)*10000)).toString();
// //	console.log(num)
// 	mail.sendmail(email,num)
// 	.then((data)=>{
// 		//数据信息存在缓存
// 		//保存验证码信息
// 		obj[email] = num;
// //		console.log(email)
// //		console.log(obj[email])
// 		return res.send(utils.sendData(0,'验证码已发送',null))
// 	})
	
// 	.catch((err)=>{
// 		return res.send(utils.sendData(-1,'验证码发送失败',null))
// 	})
	
// })

  /**
 * @api {get} /user/reg 注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {String} us 注册邮箱.
 * @apiParam {String} ps 注册密码.
 * @apiParam {String} code 验证码
 *
 * @apiSuccess {String} err 邮箱错误.
 * @apiSuccess {String} msg  返回的信息.
 */

//注册
// Router.post('/reg',(req,res)=>{
// 	let {us,ps,code} = req.body
// //	console.log(obj[us])
// //	console.log(code)
// //	console.log(us)
// //	console.log(ps)
// //	console.log(req.body)
// 	//验证验证码
// 	if(us == ''){
// 		return res.send(utils.sendData(-1,'邮箱不能为空',null))
// 	}
	
// 	if(us != ''){
// 		userModel.find({us:us})
		
// 		.then((data)=>{
// //			console.log(data)
// //			console.log(data.length)
			
// 			if(data.length > 0){
// //				console.log(22)
// 				return res.send(utils.sendData(-1,'邮箱已存在',null))
// 			}else{
// 				userModel.insertMany({us,ps})
	
// 				.then((data)=>{
// 					console.log(data)
// 					return res.send(utils.sendData(0,'注册成功请登录...',null))
// 				})
// 				.catch((err)=>{
// 					console.log(err)
// 					return res.send(utils.sendData(-1,'注册失败',null))
// 				})
// 			}
// 		})
// 		.catch((err)=>{
// //			console.log(err)
// 		})
		
// 	}
// 	if(ps == ''){
// 		return res.send(utils.sendData(-1,'请输入密码',null))
// 	}
// 	if(obj[us] !== code){
// 		return res.send(utils.sendData(-1,'请重新输入验证码',null))
// 	}
			
// })


/**
 * @api {get} /user/login 登录
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {String} us 登录邮箱.
 *  @apiParam {String} ps 登录密码.
 *
 * @apiSuccess {String} err 邮箱错误.
 * @apiSuccess {String} msg  返回的信息.
 */

//登录
Router.post('/login',(req,res)=>{
	console.log(req.body)
	let {us,ps} = req.body
	userModel.find({us:us,ps:ps})
	.then((data)=>{
		console.log(data)
		console.log(data.length)
		if(data.length == 1){
			return res.send(utils.sendData(0,'登录成功，正在跳转首页',null))
		}
		res.send(utils.sendData(-1,'登录失败',null))
	})
})

//抛出
module.exports = Router;
