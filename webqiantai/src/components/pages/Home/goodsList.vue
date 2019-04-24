<template>
	<div class="gList">
		<ul class="goodList list-contain"
			v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="60"
			>
			
			<li v-for="(item,index) in goodsList" :key='index'>
				<!--通过rooter-link传递参数-->
				<router-link :to="{path:'/goodsInfo',query: {id:item.goods_id}}">
				<div class="goodLeft">
					<a href="">
						<img :src="item.list_picture"/>
					</a>
				</div>
				<div class="goodRight">
					<p class="goodName">{{item.goods_name}}</p>
					<p class="goodTag">{{item.simple_desc}}</p>
					<p class="goodPrice">专享价：<span class="price">￥{{item.shop_price}}</span></p>
					
				</div>
				</router-link>
				<a @click="addCart(item.goods_id)"><img class="addCart" src="../../../../static/image/addCart.png"/></a>
			</li>
			
				<back-top></back-top>	
		</ul>
		
	</div>
</template>

<script>
//	import jquery from '../../../../static/js/jquery-1.11.0.min.js'
	let rootpath='http://localhost:8081';
	let page=0;
	let pagesize=5;
	let id='';
	import Vue from 'vue'
	import { Toast,InfiniteScroll  } from 'mint-ui';
	Vue.use(InfiniteScroll);

	export default{
		name:'goodsList',
		data(){
			return {
				name:'goodsList',
				goodsList:[],
//				page:0,
//				pagesize:3,
			}
		},
		methods:{
			loadMore(){
				if(page<=3){
					this.getData();
				}
			},

			//数据列表展示
			getData(){
//				this.toast=Toast({
//				  message: '加载中',
//				  iconClass: 'fa fa-spinner fa-spin'
//				});
				this.$axios.post('rootpath/api/goodsList/getData',{target:page,pagesize:pagesize},function(res){
					
				})
				.then((res)=>{
					console.log(res.data);
					//concat() 方法用于连接两个或多个数组。
					//该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
					this.goodsList=this.goodsList.concat(res.data)
						page++
						console.log(this.goodsList)
//						this.toast.close();
				})
				.catch((err)=>{
					console.log(err)
//					this.toast.close();
				})
			},

			//添加到购物车事件
			addCart(id){
				console.log(id);
				if( (window.localStorage.getItem('loginZh')) == null ){
					alert('请您先登录')
				}else {
					this.$axios.post('rootpath/api/goodsList/getById',{id:id},function(res){})
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
		
			}
		},
		created(){
			// this.addCart(id);
			// this.getData()
			
		},
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.gList{
	padding-bottom:52px;
	
.goodList{
			background:#fff;
			.w(375);
			height: auto;
			li{
				position: relative;
				width:100%;
				/*.w(375);*/
				.h(140);
				border-bottom: 1px solid #D0D0D0;
				.goodLeft{
					float: left;
					.w(106);
					.h(109);
					img{
						.w(106);
						.h(106);
					}
				}
				.goodRight{
					
					.fs(14);
					float: left;
					.w(230);
					.h(70);
					.padding(20,0,0,10);
					
					p{
						.margin-top(10);
					}
					.goodName{
						.h(19);
						color:#000;
						.fs(16);
					}
					.goodTag{
						.fs(12);
						color:#969696;
						text-overflow: ellipsis;
					}
				}
				.addCart{
					position:absolute;
					right:20px;
					bottom:30px;
					.w(35);
					.h(35);
				}
			}
			
		}
	}
</style>
<style type="text/css">
	.goodPrice{
		color:#585858;
	}
	.price{
		color:#ff498c;
		font-size: 13px;
		font-weight: bold;
		
							
	}
</style>