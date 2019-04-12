const express = require("express")
const app = express()
const bodyParser = require("body-Parser")
const path = require('path')
const cors = require('cors');
const db = require('./dbconnect.js')

//解析form表单
app.use(bodyParser.urlencoded({ extended: false }))
 
//解析json
app.use(bodyParser.json())

//解决跨域
app.use(cors());

//开启主页静态文件
app.use(express.static(path.join(__dirname,'/')))
app.use('/html',express.static(path.join(__dirname,'./html')))
app.use('/js',express.static(path.join(__dirname,'./js')))
app.use('/css',express.static(path.join(__dirname,'./css')))
app.use('/img',express.static(path.join(__dirname,'./img')))
app.use('/admin',express.static(path.join(__dirname,'./admin')))
app.use('/Resources',express.static(path.join(__dirname,'./Resources')))

//引入路由
const users = require('./router/users.js')
const upload = require('./router/upload.js')
const inDescribe = require('./router/inDescribe.js')

//调用路由
app.use('/api/users',users)
app.use('/api/upload',upload)
app.use('/api/inDescribe',inDescribe)


app.listen(4000,()=>{
	console.log('后台服务器开启' + 4000)
})
