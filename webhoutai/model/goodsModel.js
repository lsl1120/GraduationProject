const mongoose = require('mongoose')

//创建schema对象
let Schema = mongoose.Schema;

//实例化对象
let goodsSchema = new Schema({
    //required:true:判断是否为必填字段
    //type:字段类型
    goods_id: {type:Number,require:false},
	goods_name: {type:String,require:false},
	simple_desc: {type:String,require:false},
	text_desc: {type:String,require:false},
	shop_price: {type:Number,require:false},
	spec: {type:String,require:false},
	advertising_photo: {type:String,require:false},
	outside_view: {type:String,require:false},
	list_picture: {type:String,require:false},
	icon: {type:String,require:false},
	iconstatus: {type:String,require:false},
	goods_num: {type:Number,require:false},
	color_status: {type:String,require:false},
	bn_goods_id: {type:String,require:false},
	classify:{type:Number,required:false},
    arrival_time: {type:String,require:false},
    setDate:{type:String,require:false},
    
})

//参数1：集合名字
//参数2： schema对象，将schema对象变成model
let goodsmodel = mongoose.model('goods',goodsSchema);

module.exports = goodsmodel