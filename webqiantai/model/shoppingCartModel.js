const mongoose = require('mongoose')

//创建schema对象
let Schema = mongoose.Schema;

//实例化对象
let shoppingCartSchema = new Schema({
    //required:true:判断是否为必填字段
    //type:字段类型
    username: {type:Number,require:true},
    SumPrice: {type:Number,require:false},
    goods_id: {type:Number,require:false},
	goods_name: {type:String,require:false},
	simple_desc: {type:String,require:false},
	shop_price: {type:String,require:false},
	list_picture: {type:String,require:false},
	goods_num: {type:Number,require:false},
    
})

//参数1：集合名字
//参数2： schema对象，将schema对象变成model
let shoppingCartmodel = mongoose.model('shoppingCarts',shoppingCartSchema);

module.exports = shoppingCartmodel