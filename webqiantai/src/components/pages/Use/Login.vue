<template>
	<div class="login">
		<div class="loginHead">
			<router-link to="/Home">
				<img src="../../../../static/img/pba-slogan.png"/>
			</router-link>
		</div>
		<div class="loginContent">
			<p id="loginError"></p>
			<form action="" method="get" id="loginForm">
				<p>
					<input type="text" id="logVal" v-model="loginZh" value="" placeholder="请输入手机号" />
					<input type="password" name="" placeholder="密码" id="loginPass" v-model="loginMm" />
				</p>
				<!--<router-link to="/Use/MyInformation">-->
					<input type="submit" value="立即登录" id="loginBtn" @click="loginBtn" />
				<!--</router-link>-->
				<!--{{Lstate}}-->
			</form>
			
			<router-link class="goReg" to="/Use/Reg">
				
				立即注册
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Login",
		components:{},
		data(){
			return{
				name:'我是Login',
				loginZh:'',
				loginMm:'',
				// loginUsername:false,
				// loginPassword:false,
				
			}
		},
		methods:{
			// LoginUse(){
			// 	this.loginZh = this.loginZh;
			// 	console.log(this.loginZh)
			// 	var Zh = window.localStorage.getItem('regZh');
			// 	console.log(Zh)
			// 	if(this.loginZh == Zh){
			// 		this.loginUsername = true;
			// 		console.log(this.loginUsername)
			// 		console.log('账号匹配成功')
			// 	}else{
			// 		console.log('账号匹配失败')
			// 	}
					
			// },
			// LoginPass(){
			// 	this.loginMm = this.loginMm;
			// 	console.log(this.loginMm)
			// 	var Mm = window.localStorage.getItem('regMm');
			// 	console.log(Mm)
			// 	if(this.loginMm == Mm){
			// 		this.loginPassword = true;
			// 		console.log(this.loginPassword)
			// 		console.log('密码匹配成功')
			// 	}else{
			// 		console.log('密码匹配失败')
			// 	}
			// },

			//点击登录按钮的事件
			loginBtn(){
//					console.log('1');
					//页面中改变vuex的值
//					this.$store.commit('LoginState',true)

					let loginData = {
						loginZh: this.loginZh,
						loginMm: this.loginMm
					}


					//发起ajax请求
					this.$axios.post('rootpath/api/users/login',loginData,function(res){
					})
					.then((res)=>{
						console.log(res.msg)
						
						//登录成功之后，传回来的状态码为0。
						if(res.err == 0){
							//账号存储在localStorage
							window.localStorage.setItem('loginZh',this.loginZh);
							this.$router.push({path:'/Use/MyInformation'})
						}
										
					})
					.catch((err)=>{
						console.log(res.msg)
					})

			}
			
		},
		
		//vuex获取值
//		computed:{
//			Lstate(){
//				return this.$store.state.loginState
//			}
//		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../../styles/main.less");
.login{

	.loginHead{
		width:60%;
		margin: 0 auto;
		margin-top:30px;
		text-align:center;
		a{
			img{
				width:100%;
			}
		}
	}
	.loginContent{
		margin: 12px 3% 0px;
		#loginError{
			.fs(12);
			color: red;
			text-align: center;
		}
		#loginForm{
			p{
				.fs(14);
				border: 1px solid #e2e2e2;
				input{
					width: 100%;
					.h(38);
					.fs(14);
					border: none;
    				padding: 1px 2%;
    				outline: none;
				}
				input+input{
					border-top: 1px solid #e2e2e2;
				}
				
			}
			
				#loginBtn{
					width: 100%;
					.h(38);
					margin-top: 10px;
					background-color: #ff498c;
					color: #fff;
					font-size: 14px;
				    text-align: center;
				    line-height: 36px;
				    margin: 10px 0px 5px;
				    border: 1px solid #ff498c;
				    border-radius: 3px;
					
				}
			
			
		}
		.goReg{
			display: block;
			width: 100%;
			.h(38);
			.lh(36);
			text-align: center;
			font-size: 14px;
			color: #535353;
   			border: 1px solid #e2e2e2;
			background: #f8f8f8;;
			border-radius: 3px;
		}
	}
}
</style>