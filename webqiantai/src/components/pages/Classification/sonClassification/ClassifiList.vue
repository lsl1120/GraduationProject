<template>
	
	<div class="ClassifiList">
		<Header></Header>
		<div class="classifiList"
			v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
			>
			<ul>
				<li v-for="(item,index) in classifiList" :key=index>
					<div class="listImg fl">
						<router-link :to="{path:'/goodsInfo',query: {id:item.goods_id}}">
							<img :src="item.list_picture"/>
						</router-link>
						
					</div>
					<div class="listText fr">
						<p class="listName">{{item.goods_name}}</p>
						<p class="listTag">{{item.simple_desc}}</p>
						<p class="listprice">
							专享价：
							<span>￥：{{item.shop_price}}</span>
						</p>
						<!--<router-link to="">-->
							<a @click="addCart(item.goods_id)"><img src="../../../../../static/image/addCart.png"/></a>
							
						<!--</router-link>-->
					</div>
				</li>
				<back-top></back-top>	
			</ul>
		</div>
		<Tail></Tail>
	</div>
	
</template>

<script>
//	let rootpath = 'http://localhost:8081'
//	let page=0;
//	let pagesize=5;
	let id=''
	//引入Header组件
	import Header from '../../../commons/Header'
	//引入Tail组件
	import Tail from '../../../commons/Tail'
	
	import Vue from 'vue'
	import { Toast,InfiniteScroll  } from 'mint-ui';
	Vue.use(InfiniteScroll);
	
	export default{
		name:"ClassifiList",
		components:{Header,Tail},
		data(){
			return{
				name:'我是ClassifiList',
				classifiList:[],
				page:0,
				pagesize:5,
				classify:1,
				
			}
		},
		methods:{
			loadMore(){
				if(this.page<3){
					this.getData();
				}
			},

			//数据列表展示
			getData(){
				this.toast=Toast({
				  message: '加载中',
				  iconClass: 'fa fa-spinner fa-spin'
				});
				this.$axios.post('rootpath/api/goodsList/getDataClassify',{target:this.page,pagesize:this.pagesize,classify:this.classify},function(res){
					
				})
				.then((res)=>{
					console.log(res.data);
					//concat() 方法用于连接两个或多个数组。
					//该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
					this.classifiList=this.classifiList.concat(res.data)
						this.page++
						this.toast.close();
						console.log(this.classifiList)
//						this.toast.close();
				})
				.catch((err)=>{
					console.log(err)
//					this.toast.close();
				})
			},

// 			addCart(id){
// 				console.log(id);
// 				this.$axios.post('rootpath/api/goodsList/getById',{id:id},function(res){
// 				})
// 				.then((res)=>{
// 					var data=res.data;
// 					alert('添加成功');
// 					//将data写入到新的json文件中
// 					this.$axios.post('rootpath/api/goodsList/addCart',data,function(res){
// 						console.log("添加成功");
// 					})
// 				})
// 				.then((res)=>{
// //					var data=res.data;
// //					console.log('1:' + data)
// 					console.log("添加成功");
					
// //					console.log(res);
// 				})
// 				.catch((err)=>{
// 					console.log(err)
// 				})
				
// 			}

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
//			this.getData();

		}
	}
	
</script>

<style lang="less" scoped="scoped">
	@import url("../../../../styles/main.less");
	
	.classifiList{
		ul{
			background:#fff;
			li{
				.padding(15,10,15,10);
				border-bottom: 1px solid #E9E9E9;
				overflow:hidden;
				.listImg{
					display:inline-block;
					a{
						display:inline-block;
						.w(106);
						.h(109);
						img{
							.w(106);
							.h(108);
						}
					}
				}
				.listText{
					.w(235);
					display: inline-block;
					.fs(14);
					position:relative;
					.listName{
						display: inline-block;
						.w(175);
						.fs(14);
						margin-bottom:5px;
					}
					.listTag{
						display: inline-block;
						.w(175);
						margin-bottom:5px;
						.fs(13);
						color: #969696;
					}
					.listprice{
						display: inline-block;
						.fs(13);
						color: #585858;
						span{
							color: #FD4688;
						}
					}
					a{
						display: inline-block;
						.w(30);
						position: absolute;
						right: 10px;
						bottom:-10px;
						img{
							.w(30);
						}
					}
				}
			}
		}
	}
</style>