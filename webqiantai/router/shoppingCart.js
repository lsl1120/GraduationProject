const express = require("express")
const Router = express.Router()
const utils = require('../utils/utils')
const shoppingCartModel = require('../model/shoppingCartModel')
const goodsModel = require('../model/goodsModel')

//添加到购物车接口
Router.post('/addCart',(req,res)=>{
    console.log('-------------------------------------点击购物车传来的商品信息--------------------------',req.body)
    let { username, goods_id, goods_name, list_picture, simple_desc, goods_num, shop_price } = req.body
    console.log('--------------------------------点击加入购物车传来的商品id-----------------------------', goods_id)
    shoppingCartModel.find({goods_id:goods_id,username:username})

    .then((data)=>{
        console.log('---------------------------查询购物车表返回的数据------------------------', data)
        console.log(data.length)
        if(data.length == 0){
            shoppingCartModel.insertMany({
                username: username,
                goods_id: goods_id,
				goods_name: goods_name,
				list_picture: list_picture,
				simple_desc: simple_desc,
				goods_num: goods_num,
                shop_price: shop_price,
                SumPrice: 0,
            })
            res.send(utils.sendData(0,'购物车添加成功',null))
        }else {
            res.send(utils.sendData(-1,'购物车已存在相同商品',null))
        }
            
    })
    .catch((err)=>{
        console.log(err)
    })
})


//查询购物车数据接口
Router.post('/cartData',(req,res)=>{
    let { pagesize, target, username } = req.body
    shoppingCartModel.find({username:username})
    .then((data)=>{
        console.log('----------------------------------查询购物表返回的数据--------------------------------------', data)

        pagePerson = data.slice( target * pagesize, ( target + 1 ) * pagesize );

        console.log('----------------------------------pagePerson---------------------------', pagePerson)
        
		res.send(utils.sendData(0,'分页处理成功', pagePerson));
    
    })
    .catch((err)=>{
        console.log(err)
    })
})

//购物车删除商品接口
Router.post('/del',(req,res)=>{
    console.log('---------------------点击删除之后页面传回来的数据---------------------',req.body)
    let { id, username } = req.body
    shoppingCartModel.deleteOne({goods_id:id,username:username})
    .then((data)=>{
        console.log('---------------------------删除对应数据返回的数据-----------------------',data)
        console.log(data.ok)
        if(data.ok == 1){
            res.send(utils.sendData(0,'删除成功', null));
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})

//购物车更新商品数量接口
Router.post('/numUpdate',(req,res)=>{
    console.log('---------------------点击加减商品之后页面传回来的数据---------------------',req.body)
    let { goods_id, goods_num, username } = req.body
    shoppingCartModel.updateOne({goods_id:goods_id,username:username},{ $set:{goods_num:goods_num}})
    .then((data)=>{
        console.log('---------------------------更新对应数据返回的数据-----------------------',data)
        console.log(data.ok)
        if(data.ok == 1){
            res.send(utils.sendData(0,'商品数量成功', null));
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})


//将写好的路由分发模块抛出
module.exports=Router;