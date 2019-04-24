<template>
	<div class="goodsInfo">
		<infoHeader></infoHeader>
		<div class="body_cont" >
			<div class="" v-for="(item,index) in goodsInfo" :key='index'>
			<div class="goods_box">
				<div class="pic_box">
					<img :src="item.list_picture"/>
				</div>
				<div class="goods_name">
					<p>PBA {{item.goods_name}}</p>
				</div>
			</div>
		<div class="good_info">
			<p><span class="zxj">专享价：<label>￥{{item.shop_price}}</label></span><span class="buyPeo">65539人已购买</span></p>
			<p><span class="zxj">店铺优惠</span><span class="baoy"><img src="../../../../static/image/free.jpg"/><span class="bytext">满99包邮</span></span></p>
		</div>
		</div>
		<div class="imgInfo">
			<p>图文详情</p>
		</div>
		<div class="Img">
			<img src="../../../../static/img/goodsInfo/968f2f25eba29ffaf0ee46378212e35d.jpg"/>
			<img src="../../../../static/img/goodsInfo/1969517458b3360474c47baca6ee5291.jpg"/>
			<img src="../../../../static/img/goodsInfo/5e446be1d525843ae666e70a4e89b7ed.jpg"/>
			<img src="../../../../static/img/goodsInfo/6d39033d3056fcd9f4d21ba956030b02.jpg"/>
			<img src="../../../../static/img/goodsInfo/1b1226c362121c8abfb47e8b785c6f56.jpg"/>
			<img src="../../../../static/img/goodsInfo/1388fde5db4f80282b1d532bb7cee023.jpg"/>
			<img src="../../../../static/img/goodsInfo/4b7d6aa0b1f5a82f44aae25f916ddc45.jpg"/>
			<img src="../../../../static/img/goodsInfo/9d1407b43f75fb16b9c6f3a8a8c773b6.jpg"/>
			<img src="../../../../static/img/goodsInfo/ab5e021ed9bf1e9849ef90ba116a678e.jpg"/>
			<img src="../../../../static/img/goodsInfo/40dde74dfb97834e4724c646c97834f7.jpg"/>
			<img src="../../../../static/img/goodsInfo/e083276377c97fe89751d71c486fbf4c.jpg"/>
			<img src="../../../../static/img/goodsInfo/770c1b8d1fdde8d662179a9d3e8d2f2d.jpg"/>
			<img src="../../../../static/img/goodsInfo/6a9ea7828153b7a0899f31cc3dcd4f7d.jpg"/>
			<img src="../../../../static/img/goodsInfo/6739f9011672a47085b0b7c6887524de.jpg"/>
			<img src="../../../../static/img/goodsInfo/7068f6d706bd9b2152b4d7b0abd683f7.jpg"/>
			<img src="../../../../static/img/goodsInfo/3bda8a07220b7f35745619effa010fe5.jpg"/>
			<img src="../../../../static/img/goodsInfo/2173507b3c4feb526d7623b431a6619e.jpg"/>
			<img src="../../../../static/img/goodsInfo/c8b41d929e00009286888b2ea524725f.jpg"/>
			<img src="../../../../static/img/goodsInfo/faf14ddc6b315d593877cf479acb6a71.jpg"/>
			<img src="../../../../static/img/goodsInfo/bb5816cb5044cade78916462ba39e807.jpg"/>
			<img src="../../../../static/img/goodsInfo/ec3357496a46fbfa2ad4eabf3a607209.jpg"/>
			<img src="../../../../static/img/goodsInfo/4a0c59c9ef1d33374e4c5f5e3dfb02e6.jpg"/>
			<img src="../../../../static/img/goodsInfo/bebd1ffc69d1e38516f5574f5481e43e.jpg"/>
			<img src="../../../../static/img/goodsInfo/2fcfd288a61850276f3cdd839a0cce0c.jpg"/>
			<img src="../../../../static/img/goodsInfo/c7c988118b06d9e481292bb2a15de4b9.jpg"/>
			<img src="../../../../static/img/goodsInfo/122017770fbb9154b926115c031e4690.jpg"/>
			<img src="../../../../static/img/goodsInfo/1f85019945acba7e1c9c9f26aed5580d.jpg"/>
		</div>
		</div>
		<div class="infoFooter">
			<div class="addCart" @click="addCart()"><a>加入购物车</a></div>
		</div>
	</div>
</template>

<script>
	let rootpath='http://localhost:8081'
	import Vue from 'vue'
	import infoHeader from './infoHeader'
		import infoFooter from './infoFooter'
	export default{
		name:'goodsInfo',
		components:{infoHeader,infoFooter},
		data(){
			return {
				name:'goodsInfo',
				goodsInfo:[],
			}
		},
		methods:{
			getData(){
				//获取前一个页面传过来的id
				console.log(this.$route.query.id)
				this.$axios.post('rootpath/api/goodsList/getById',{id:this.$route.query.id},function(res){
				})
				.then((res)=>{
					console.log(res.data[0])
					this.goodsInfo.push(res.data[0]);
					console.log(this.goodsInfo)
				})
				.catch((err)=>{
					console.log(err)
				})
			},

			//添加到购物车事件
			addCart(){
				console.log(this.$route.query.id)
				if( (window.localStorage.getItem('loginZh')) == null ){
					alert('请您先登录')
				}else {
					this.$axios.post('rootpath/api/goodsList/getById',{id:this.$route.query.id},function(res){})
					.then((res)=>{
						console.log(res.data[0])
						console.log( (window.localStorage.getItem('loginZh')) )
						let cartData = {
							username: window.localStorage.getItem('loginZh'),
							goods_id: res.data[0].goods_id,
							goods_name: res.data[0].goods_name,
							list_picture: res.data[0].list_picture,
							simple_desc: res.data[0].simple_desc,
							goods_num: res.data[0].goods_num,
							shop_price: res.data[0].shop_price,
						}
						console.log(cartData)
						
						this.$axios.post('rootpath/api/shoppingCart/addCart',cartData,function(res){})
						.then((res)=>{
							alert(res.msg)
						})
						.catch((err)=>{
							console.log(res.msg)
						})
					})
					.catch((err)=>{
						console.log(err)
					})
				}
								
			},
		},
		created(){
			this.getData();
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
	.goodsInfo{
		.body_cont{
			.w(375);
			height:auto;
			.margin(40,0,50,0);
			.goods_box{
				.w(375);
				.h(219);
				background:#fff;
				.padding(22,10,22,15);
				.pic_box{
					.margin(0,0,0,105);
					.w(144);
					.h(144);
					img{
						.w(144);
						.h(144);
					}
				}
				.goods_name{
					text-align:center;
					P{
					.margin(10,0,0,0);
				    .fs(15);
				    color: #000;
				    font-weight: bold;
					}
				}
				
			}
			.good_info{
				.w(375);
				.h(90);
				background:#fff;
				.margin(15,0,15,0);
				p{
					.h(44);
					.lh(44);
					.fs(12);
					.padding(3,10,3,10);
					border-bottom:1px solid #E2E2E2;
					.baoy{
						float:right;
						position:relative;
						img{
							.w(105);
							.h(27);
						}
						.bytext{
							position: absolute;
							left:20px;
							top:2px;
							.fs(16);
							color:#fff;
						}
						
					}
					.buyPeo{
						float: right;
						color:#969696;
					}
					.zxj{
						.fs(15);
						font-weight:bold;
						label{
							color:#ff498c;
						}
					}
					
				}
			}
			.imgInfo{
				.h(35);
				.lh(35);
				.w(375);
				background:#fff;
				.margin(15,0,15,0);
				border-bottom: 1px solid #E2E2E2;
				border-top: 1px solid #E2E2E2;
				.fs(14);
				color:#FF498C;
				text-align: center;
				
			}
			.Img{
				img{
					.w(375);
					.h(141);
				}

			}
		}
		.infoFooter{
		display:flex;
		position:fixed;
		bottom:0;
		right:0;
		left:0;
		.w(375);
		.h(50);
		background:#fff;
		border-top:2px solid #E2E2E2;
		div{
			flex: 1;
		}
		.addCart{
			.h(50);
			.lh(50);
			text-align: center;
			background: orange;
			border: 2px solid #E2E2E2;
			border-radius: 5px;
			.fs(16);
			a{
				color:#fff;
			}
			
		}
	}
		
		
	}
</style>
