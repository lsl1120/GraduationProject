const express = require('express')
const Router = express.Router()
const fs = require('fs')
const path = require('path')
const multer = require('multer')

/**
 * @api {get} /user/img 上传文件
 * @apiName upload
 * @apiGroup Upload
 *
 * @apiParam {String} formData 上传文件信息.
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  返回的信息.
 *  @apiSuccess {String} path  返回的文件路径.
 */

//设置图片保存的临时路径
let upload = multer({dest:'tmp/'})

Router.post('/img',upload.single('test'),(req,res)=>{
	console.log(req.file.path)
	fs.readFile(req.file.path,(err,data)=>{
		if(err){
			return res.send('上传错误')
		}
	
	let filename = new Date().getTime() + parseInt(Math.random(0,1)*1000) + "." + req.file.mimetype.split('/')[1];	
	console.log(filename)
	
	fs.writeFile(path.join(__dirname,'../img',filename),data,(err)=>{
		let array = {
			err:0,
			msg:'上传成功',
			path:'http://127.0.0.1:4000/img/' + filename
		}
		res.send(array);
		})
	})
})

//抛出
module.exports = Router;