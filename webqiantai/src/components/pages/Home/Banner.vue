<template>
	<div class="banner">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"  v-for="(item,index) in imgList" :key='index'>
		        	<img :src="item.url"/>
		        </div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Vue from 'vue'
	export default{
		name:'Banner',
		data(){
			return {
				name:'Banner',
				imgList:[{url:"../../../../static/image/banner1.jpg"},
				{url:"../../../../static/image/banner2.jpg"},
				{url:"../../../../static/image/banner3.jpg"}]
			}
		},
		created(){
			Vue.nextTick(()=>{
       			this.mySwiper = new Swiper('.swiper-container', {
					loop: true,
					autoplay:{
						//时间间隔
						delay: 2000,
						 //true触碰后自动切换停止，false触碰后自动切换也不会停止
						disableOnInteraction: false,
					},				
					pagination: {
				      el: '.swiper-pagination',
				  },
				});	
           })
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
@import '../../../../node_modules/swiper/dist/css/swiper.css';
.banner{
	.swiper-slide{
		.h(145);
		img{
		 width:100%;
		.h(145);
		}
	}
	
}
</style>
<style type="text/css">
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #DDDDDD;
  opacity: 0.5;
  margin-left: 15px;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}
</style>