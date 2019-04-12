const express = require('express')
const Router =  express.Router()
const inDescribe = require('../model/describeModel')
const goodsModel = require('../model/goodsModel.js')
const utils = require('../utils/utils.js')

//插入商品数据接口
Router.post('/describe',(req,res)=>{
	console.log(req.body)
	let { goods_id, goods_name, simple_desc, shop_price, list_picture, classify } = req.body
	//时间戳
	let timeStamp = new Date().getTime()*1
	goodsModel.insertMany({
		goods_id:goods_id,
		goods_name:goods_name,
		simple_desc:simple_desc,
		shop_price:shop_price,
		list_picture:list_picture,
		classify:classify,
		setDate:timeStamp
	})
	.then((data)=>{
		console.log(data)
		return res.send(utils.sendData(0,'插入商品数据成功',null))
	})
	.catch((err)=>{
		console.log(err)
		return res.send(utils.sendData(-1,'插入商品数据失败',null))
	})

})


//获取数据发送给前端渲染
Router.post('/chaDescribe',(req,res)=>{
	console.log(req.body)
	let total = 0
	let arraydata = {}
	let { 
		targetpage,
        pagesize,
        Classify,
		fuzzySearch } = req.body
		
		//转成数字类型才能进行分页计算
		pagesize = Number(pagesize)
		targetpage = Number(targetpage)	
	
	if( Classify=='' && fuzzySearch=='' ){
		goodsModel.find()
		.then((data)=>{
			console.log(data)
			console.log(data.length)
			total = data.length
			return goodsModel.find().sort({'setDate':-1}).limit(pagesize).skip((targetpage - 1) * pagesize)
		})
		.then((data)=>{
			console.log('--------------------data-----------',data)
			arraydata = {total:total,data:data}
			res.send(utils.sendData(0,'请求商品数据成功',arraydata))
		})
		.catch((err)=>{
			res.send(utils.sendData(-1,'请求商品数据失败',null))
		})
	}else if(Classify == '全部'){
		goodsModel.find()
		.then((data)=>{
			console.log(data)
			console.log(data.length)
			total = data.length
			return goodsModel.find().sort({'setDate':-1}).limit(pagesize).skip((targetpage - 1) * pagesize)
		})
		.then((data)=>{
			console.log('--------------------data-----------',data)
			arraydata = {total:total,data:data}
			res.send(utils.sendData(0,'请求商品数据成功',arraydata))
		})
		.catch((err)=>{
			res.send(utils.sendData(-1,'请求商品数据失败',null))
		})

	}else if(Classify){
		console.log('-----------------分类------------',Classify)
		goodsModel.find({classify:Classify})
		.then((data)=>{
			console.log(data)
			console.log(data.length)
			total = data.length
			return goodsModel.find({classify:Classify}).sort({'setDate':-1}).limit(pagesize).skip((targetpage - 1) * pagesize)
		})
		.then((data)=>{
			console.log('--------------------data-----------',data)
			arraydata = {total:total,data:data}
			res.send(utils.sendData(0,'请求商品数据成功',arraydata))
		})
		.catch((err)=>{
			res.send(utils.sendData(-1,'请求商品数据失败',null))
		})

	}else if(fuzzySearch){
		console.log('-----------------模糊搜索------------',fuzzySearch)
		goodsModel.find({goods_name:{$regex:fuzzySearch}})
		.then((data)=>{
			console.log(data)
			console.log(data.length)
			total = data.length
			return goodsModel.find({goods_name:{$regex:fuzzySearch}}).sort({'setDate':-1}).limit(pagesize).skip((targetpage - 1) * pagesize)
		})
		.then((data)=>{
			console.log('--------------------data-----------',data)
			arraydata = {total:total,data:data}
			res.send(utils.sendData(0,'请求商品数据成功',arraydata))
		})
		.catch((err)=>{
			res.send(utils.sendData(-1,'请求商品数据失败',null))
		})
	}
})


//删除某条商品数据
Router.post('/delone',(req,res)=>{
	let {goods_id} = req.body
	goodsModel.deleteOne({goods_id:goods_id})
	.then((data)=>{
		res.send(utils.sendData(0,'删除成功',null))
	})
	.catch((err)=>{
		res.send(utils.sendData(-1,'删除失败',null))
	})
})


//获取对应商品数据信息接口
Router.post('/getById',(req,res)=>{
	let { goodsid } = req.body
	goodsModel.find({goods_id:goodsid})	
	.then((data)=>{
		console.log('--------------------通过id查询商品数据成功',data)
		res.send(utils.sendData(0,'查询该id商品数据成功',data))
	})
	.catch((err)=>{
		res.send(utils.sendData(-1,'查询该id商品数据失败',null))
	})
})


//修改
Router.post('/upById',(req,res)=>{
	let { goods_id, goods_name, simple_desc, shop_price, list_picture, classify } = req.body
	//时间戳
	let timeStamp = new Date().getTime()*1
	goodsModel.updateOne({goods_id:goods_id},{
		$set:{
			goods_name:goods_name,
			simple_desc:simple_desc,
			shop_price:shop_price,
			list_picture:list_picture,
			classify:classify,
			setDate:timeStamp
		}

	})
	.then((data)=>{
		console.log('修改商品数据成功')
		res.send(utils.sendData(0,'修改成功',data))
	})
	.catch((err)=>{
		console.log('修改商品数据失败')
		res.send(utils.sendData(-1,'修改失败',null))
	})
	
})

module.exports = Router;