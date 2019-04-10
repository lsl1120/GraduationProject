<template>
	<div class="home">
		<Header></Header>
		<banner></banner>
		<ul class="goodl1">
			<li v-for="(item,index) in goodl1" :key='index'><a href=""><img :src="item.url"/></a></li>
		</ul>
		<div class="banner-hot"><img src="../../../../static/image/banner-hot.jpg"/></div>
		<goodsList></goodsList>
		<Tail></Tail>
	</div>
</template>

<script>
	import Banner from './Banner'
	import goodsList from './goodsList'
	import Header from '../../commons/Header'
	//引入Tail组件
	import Tail from '../../commons/Tail.vue'
export default{
	name:'Home',
	components:{Banner,goodsList,Header,Tail},
	data(){
		return {
			name:'home',
			goodl1:[
			{url:"../../../../static/image/1.jpg"},
			{url:"../../../../static/image/2.jpg"},
			{url:"../../../../static/image/3.jpg"}
			]
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../styles/common/base.css';
@import '../../../styles/main.less';
	*{margin: 0;padding: 0;}
	.home{
		
		/*margin-top: 60px;*/
		.goodl1{
			display: flex;
			border-bottom: 1px solid #DDDDDD;
			li{
				/*width: 100%;*/
				flex: 1;
				border-right: 1px solid #DDDDDD;
				img{
					/*.w(124);*/
					width: 100%;
					.h(139);
				}
			}
		}
		.banner-hot{
			width: 100%;
			.h(62);
			border-bottom: 2px solid #D1D1D1;
			img{
				/*.w(375);*/
				width:100%;
				.h(59);
			}
		}
		
		
	}
	
</style>
