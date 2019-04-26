<template>
	<div class="infoHeader">
		<!--<router-link to='/Home'>-->
		<span @click="huitui"><img src="../../../../static/img/back2.jpg"/></span>
		<!--</router-link>-->
		<span good_info>商品详情</span>
		<span class="icon_cart"><img src="../../../../static/image/icon_shoppingcart.png"/></span>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		name:'infoHeader',
		data(){
			return {
				name:'infoHeader'
			}
		},
		methods:{
			//回退到上一个网页
			huitui(){
				this.$router.back(-1);
			}
		},
		created(){
//			this.huitui();
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
	.infoHeader{
		position:fixed;
		top:0;
		right:0;
		left:0;
		.w(375);
		.h(45);
		.lh(45);
		.padding(0,15,0,15);
		background:#FAFAFA;
		border-bottom:2px solid #E2E2E2;
		.fs(18);
		span{
			display:inline-block;
			.w(110);
			img{
				.w(40);
				.h(18);
			}
		}
		
		.icon_cart{
			img{
				float:right;
				.w(25);
				.h(25);
				.lh(25);
			}
		}
	}
</style>
