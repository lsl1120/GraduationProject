var path=require('path');
var fs = require('fs');
const express=require('express');
const Router=express.Router();
//引入了Model就可以用它底下的find()方法
const utils=require('../utils/utils.js');
const goodsModel = require('../model/goodsModel')

var pagePerson='';
var cartData='';
// var url= path.join(__dirname,'../static/demo/data/demo01.json');
var url2= path.join(__dirname,'../static/demo/data/carts.json');


// function pagination(p,s){
//     return new Promise(function(resolve, reject){
//     	 fs.readFile(url,function(err,data){
// 	        if(err){
// 	           reject(err);
// 	        }else{
// 	        	var str = data.toString();
// 		        var obj = JSON.parse(str); 
 				//按页读数据
 				// slice() 方法可从已有的数组中返回选定的元素。
// 		        pagePerson = obj.data.slice(s*p,(p+1)*s);
// 				resolve(pagePerson) 
// 	        }
// 	    })
//     })
   
// }

/**
 * @api {post} /goodsList/getData/ getData
 * @apiName getData
 * @apiGroup goodsList
 *
 * @apiParam {Number} pagesize 页码尺寸.
 * @apiParam {Number} target 目标页.
 * @apiSuccess {String} err 错误信息.
 * @apiSuccess {String} msg  成功信息.
 */

// Router.post('/getData',(req,res)=>{
// 	let pagesize=Number(req.body.pagesize);
// 	console.log(pagesize);
// 	let target=Number(req.body.target)
// 	console.log(target);
// 		pagination(target,pagesize)
// 		.then((data)=>{
// 			console.log(pagePerson)
// 			res.send(utils.sendData(0,'ok',pagePerson));
// 		})
// 		.catch((err)=>{
// 			console.log(err)
// 		})
// })

//查询数据库数据接口
Router.post('/getData',(req,res)=>{
	let { pagesize, target } = req.body
	goodsModel.find({})
	.then((data)=>{
		console.log('---------------------查询goods表成功-------------------------')
		//slice() 方法可从已有的数组中返回选定的元素。
		pagePerson = data.slice( target * pagesize, ( target + 1 ) * pagesize );
		console.log('----------------------------------pagePerson---------------------------', pagePerson)
		res.send(utils.sendData(0,'分页处理成功', pagePerson));

	})
	.catch((err)=>{
		console.log(err)
	})
})


// function changeJson(id){
// 		return new Promise(function(resolve, reject){
// 	    	 fs.readFile(url,function(err,data){
// 	        if(err){
// 	            reject(err);
// 	        }
// 	        else{
// 	        	var str = data.toString();
// 	        	var obj = JSON.parse(str);
// 				var data=obj.data;
// 			    for(var i = 0; i < data.length;i++){
// 			   		var goods_id=Number(data[i].goods_id)
// 			        if(id ==goods_id){
// 			    	data=data[i]
// 			        resolve(data);
// 			        }
// 			    }
// 	        }
// 	     })
//     })
  
// }

/**
 * @api {post} /goodsList/getById/getById
 * @apiName getById
 * @apiGroup goodsList
 *
 * @apiParam {Number} id 商品id.
 * @apiSuccess {String} err 错误信息.
 * @apiSuccess {String} msg  成功信息.
 */

// Router.post('/getById',(req,res)=>{
// 	let id=Number(req.body.id);
// 	console.log(id);
// 		changeJson(id)
// 		.then((data)=>{
// 			console.log(data)
// 			res.send(utils.sendData(0,'ok',data));
// 		})
// 		.catch((err)=>{
// 			console.log(err)
// 		})
// })


//对应商品id查询商品详情接口
Router.post('/getById',(req,res)=>{
	let { id } = req.body
	console.log('----------------------------页面传过来的商品id--------------------------', id)
	goodsModel.find({goods_id:id})
	.then((data)=>{
		console.log('-------------------------查询goods表返回的数据-----------------------', data)
		res.send(utils.sendData(0,'查询对应id商品成功', data));
	})
	.catch((err)=>{
		console.log(err)
	})
})


//商品搜索接口
Router.post('/search',(req,res)=>{
	let { searchname } = req.body
	console.log('------------------------------搜索框传过来的值------------------------',searchname)
	goodsModel.find({goods_name:searchname})
	.then((data)=>{
		console.log('------------------------------搜索查询goods表返回的数据---------------------------',data)
		console.log(data.length)
		if(data.length == 1){
			res.send(utils.sendData(0,'搜索查询对应商品成功', data));
		}
	})
	.catch((err)=>{
		console.log(err)
	})
})

//商品分类接口
Router.post('/getDataClassify',(req,res)=>{
	console.log(req.body)
	let { pagesize, target, classify } = req.body
	goodsModel.find({classify:classify})
	.then((data)=>{
		console.log('---------------------分类页面1查询goods表成功-------------------------',data)
		pagePerson = data.slice( target * pagesize, ( target + 1 ) * pagesize );
		console.log('----------------------------------pagePerson---------------------------', pagePerson)
		res.send(utils.sendData(0,'分页处理成功', pagePerson));

	})
	.catch((err)=>{
		console.log(err)
	})
})


// function writeJson(params){
// 	return new Promise(function(resolve, reject){
// 	    	 fs.readFile(url2,function(err,data){
// 	        if(err){
// 	            reject(err);
// 	        }
// 	        else{
// 				console.log('-------------------------------------params----------------------',params)
//         	var str = data.toString();
//         	var obj = JSON.parse(str);
//         	var data=obj.data;
//         		data.unshift(params);//将传来的对象push进数组对象中
// 	        	obj.total = data.length;//定义一下总条数，为以后的分页打基础
// //		        console.log(data);
// 		        resolve(data)
// 		        var str = JSON.stringify(obj);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
// 	        	fs.writeFile(url2,str,function(err){
// 	            if(err){
// 	                console.error(err);
// 	            }
// 	        })
// 	      }
//     })
// })
// }
/**
 * @api {post} /goodsList/addCart/ addCart
 * @apiName addCart
 * @apiGroup goodsList
 *
 * @apiParam {String} params 对应商品的信息.
 * @apiSuccess {String} err 错误信息.
 * @apiSuccess {String} msg  成功信息.
 */
// Router.post('/addCart',(req,res)=>{
// 	let params=req.body;
// 	console.log(params);
// 		writeJson(params)
// 		.then((data)=>{
// 			console.log(data)
// 			res.send(utils.sendData(0,'ok',data));
// 		})
// 		.catch((err)=>{
// 			console.log(err)
// 		})
// })

// function cartDatas(p,s){
//     return new Promise(function(resolve, reject){
//     	 fs.readFile(url2,function(err,data){
// 	        if(err){
// 	           reject(err);
// 	        }else{
// 	        	var str = data.toString();
// 		        var obj = JSON.parse(str); 
// 				//按页读数据
// 		        cartData = obj.data.slice(s*p,(p+1)*s);
// 				resolve(cartData) 
// 	        }
// 	    })
//     })
   
// }


/**
 * @api {post} /goodsList/cartData/ cartData
 * @apiName cartData
 * @apiGroup goodsList
 *
 * @apiParam {Number} pagesize 页码尺寸.
 * @apiParam {Number} target 目标页.
 * @apiSuccess {String} err 错误信息.
 * @apiSuccess {String} msg  成功信息.
 */

// Router.post('/cartData',(req,res)=>{
// 	let pagesize=Number(req.body.pagesize);
// 	console.log(pagesize);
// 	let target=Number(req.body.target)
// 	console.log(target);
// 		cartDatas(target,pagesize)
// 		.then((data)=>{
// 			console.log(cartData)
// 			res.send(utils.sendData(0,'ok',cartData));
// 		})
// 		.catch((err)=>{
// 			console.log(err)
// 		})
// })


//将写好的路由分发模块抛出
module.exports=Router;
