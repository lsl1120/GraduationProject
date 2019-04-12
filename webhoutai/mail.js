'use strict';
const nodemailer = require('nodemailer');

// nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'qq',//邮箱的服务商
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "984745509@qq.com", // 默认邮箱
            pass: 'nvdsbwzbjirtbgai' // //smtp 授权码
        }
    });

    function sendmail(mail,msg){
        return new Promise((resolve,reject)=>{
        	console.log(mail)
        // 发送邮件相关信息
    	let mailOptions = {
	        from: '984745509@qq.com', // sender address
	        to: mail, // list of receivers
	        subject: '某某管理系统邮箱验证', // Subject line
	        text: msg, // plain text body
    };
        	
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {reject(error)}
                resolve('发送成功')
            })
        })
    }
//  sendmail('98475509@qq.com','123')
   module.exports={sendmail};
// });