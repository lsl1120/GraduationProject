const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path=require('path');
const cors = require('cors');
const db = require('./mongodbconnect')


//解析form表单
app.use(bodyParser.urlencoded({ extended: false }));
//解析json
app.use(bodyParser.json());
//解决跨域
app.use(cors()); 

//开启静态文件
app.use(express.static(path.join(__dirname,'/')));
//app.use(express.static(path.join(__dirname,'./public')));
//app.use('/admin',express.static(path.join(__dirname,'./admin')));

//引入路由模块
const goodsList=require('./router/goodsList.js')
const users = require('./router/users')
const shoppingCart = require('./router/shoppingCart')

//使用引入的路由
app.use('/api/goodsList', goodsList)
app.use('/api/users', users)
app.use('/api/shoppingCart', shoppingCart)

app.listen(8081,()=>{
	console.log('PBA服务器成功开启');
})
