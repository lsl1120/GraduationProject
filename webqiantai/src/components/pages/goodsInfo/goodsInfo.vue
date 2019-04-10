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
			<img src="http://appimg.pba.cn/2017/03/20/e220061c25ad44cf02986206e1f253a0.jpg"/>
			<img src="http://appimg.pba.cn/2017/03/20/20bc29d2bf5568bc63a33305c2a787a8.jpg"/>
			<img src="http://appimg.pba.cn/2017/03/20/a3d19dfc48500e7b196b456bb66f7a27.jpg"/>
			<img src="http://appimg.pba.cn/2017/03/20/cdd64c93772f15758763b7d8b95be649.jpg"/>
			<img src="http://appimg.pba.cn/2017/03/20/f42e417b161f53d0a1320656633b3373.jpg"/>
			<img src="http://appimg.pba.cn/2017/03/20/20cf1238036afd94e0a0e89c187050e9.jpg"/>
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
					console.log('请您先登录')
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
							console.log(res.msg)
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
