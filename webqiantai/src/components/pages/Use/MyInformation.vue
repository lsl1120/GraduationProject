<template>
	<div class="myInfo">
		<div class="myHead">
			<p class="welcome">Welcome</p>
			<p class="zhanghao">用户：{{myInfo}}</p>
		</div>
		<div class="myInfoContent">
			<p @click="delLocal">退出</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"MyInformation",
		components:{},
		data(){
			return{
				name:'我是MyInformation',
				myInfo:''
			}
		},
		methods:{
			getInfo(){
				var myZh = window.localStorage.getItem('loginZh');
				this.myInfo = myZh;
				console.log(this.myInfo)
			},
			delLocal(){
				window.localStorage.removeItem('loginZh');
				this.$router.push({path:'/Use/Login'});
			}
		},
		created(){
			this.getInfo();
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../../styles/main.less");
.myInfo{
	.myHead{
		width:100%;
		.h(150);
		background:#ff498c;
		text-align:center;
		padding-top:10%;
		.welcome{
			color: #fff;
			.fs(20);
		}
		.zhanghao{
			color: skyblue;
			.fs(20);
		}
	}
	.myInfoContent{
		margin-top:10px;
		border-top:2px solid #ccc;
		p{
			.h(30);
			.fs(20);
			color:pink;
			border-bottom:1px solid #ccc;
			padding-left:2%;
			
		}
	}
}
</style>