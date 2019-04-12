const mongoose = require('mongoose')

//创建schema对象
let Schema = mongoose.Schema;

//实例化对象
let classifySchema = new Schema({
	//分类名字
	classifyName:{type:String,require:true},
	//分类描述
	classifyDescribe:{type:String,require:true},
	//分类图片
	classifyImg:{type:String,require:true},
	//时间戳
	setDate:{type:String,require:true}
})

//参数1：集合名字 参数2：schema对象，将schema对象变成model
let describemodel = mongoose.model('describe',classifySchema);

module.exports = describemodel
