<template>
	<div class="ShoppingCart"
		v-infinite-scroll="loadMore"
	            infinite-scroll-disabled="loading"
	            infinite-scroll-distance="10"
		>
			<div class="cart" v-if="false">
				<div class="cart_box">
					<img src="../../../../static/image/icon_shoppingcart.png"/>
				</div>
				<p class="kong">购物车还是空的哦~~~</p>
			</div>
			<div class="manjian">
				<div class="manjian_desc">
					<span>PBA美妆专场，</span>
					<a href="">【满199减10】</a>
				</div>
			</div>
			<ul class="cartList">
				<li v-for="(item,index) in ShoppingCart" :key='index'>
					
					<a @click='check()'><input type="checkbox" name="" id="checkbox_1" v-model="checked" :value="item.goods_id" /></a>
					<div class="goods_img">
						<img :src="item.list_picture"/>
					</div>
					<div class="goods_desc">
						<p class="p" >{{item.simple_desc}}
							<span @click="del(item.goods_id)"><img src="../../../../static/image/goods_delete.png" /></span>
						</p>
						<span class="num_cut" @click="cut(item)"><img src="../../../../static/image/num_cut.png"/></span>
						<input type="text" name="" id="text_box" v-model="item.goods_num" @keyup.enter = "num(item)" />
						<span class="num_add" @click="add(item)"><img src="../../../../static/image/num_add.png"/></span>
						<span class="xiaoji">￥{{item.shop_price*item.goods_num|keepTwoNum}}</span>
					</div>
				</li>
			</ul>
			<div class="jiesuan">
				<div class="left_box">
					<a  @click="checkAll"><input type="checkbox" name="checkAll" id="checkAll" value="" v-model="checkall"/></a><label>全选</label>
					<span class="totalPrice">共<label class="totalNum">{{numTotale}}</label>件，￥<label>{{priceTotal}}</label></span>
				</div>
				<div class="right_box">
					
				</div>
			</div>
		<Tail></Tail>
	</div>
</template>

<script>
	//引入Tail组件
	import Vue from 'vue'
	import Tail from '../../commons/Tail'
//	let rootpath='http://localhost:8081'
	let page=0;
	let pagesize=5;
	import { InfiniteScroll  } from 'mint-ui';
	Vue.use(InfiniteScroll);
	export default{
		name:"ShoppingCart",
		components:{Tail},
		data(){
			return{
				name:'我是ShoppingCart',
				ShoppingCart:[],
				checkall:false,
				checked:[],
				total:0,
				prices:0,
			}
		},
		methods:{
			loadMore(){
					this.getData();
			},

			//购物车数据
			getData(){
				console.log( (window.localStorage.getItem('loginZh')) )
				let cartData = {
					target: page,
					pagesize: pagesize,
					username: window.localStorage.getItem('loginZh'),
				}
				this.$axios.post('rootpath/api/shoppingCart/cartData', cartData, function(res){
					
				})
				.then((res)=>{
					this.ShoppingCart=this.ShoppingCart.concat(res.data)
						page++;
				})
				.catch((err)=>{
					console.log(err)
				})
			},

			//输入商品数量
			num(item){
				console.log('回车事件')
				console.log(item.goods_num)
				console.log(item.goods_id)
				if(item.goods_num > 1){
					let cartNum = {
					goods_num: item.goods_num,
					goods_id: item.goods_id,
					username: window.localStorage.getItem('loginZh'),
				}
				this.$axios.post('rootpath/api/shoppingCart/numUpdate', cartNum, function(res){

				})
				.then((res)=>{
					console.log(res.msg)
					// this.$router.go(0)
				})
				.catch((err)=>{
					console.log(err)
				})

				}else{
					item.goods_num == 1
					this.$router.go(0)
				}
				
			},

			//点击增加
			add(item){
				console.log(window.localStorage.getItem('loginZh'))
				console.log(item.goods_id)
				item.goods_num++;
				console.log(item.goods_num);

				let cartNum = {
					goods_num: item.goods_num,
					goods_id: item.goods_id,
					username: window.localStorage.getItem('loginZh'),
				}
				this.$axios.post('rootpath/api/shoppingCart/numUpdate', cartNum, function(res){

				})
				.then((res)=>{
					console.log(res.msg)
					// this.$router.go(0)
				})
				.catch((err)=>{
					console.log(err)
				})

			},
			//点击减少
			cut(item){
				console.log(item.goods_num);
				if(item.goods_num>1){
					item.goods_num--;
					let cartNum = {
						goods_num: item.goods_num,
						goods_id: item.goods_id,
						username: window.localStorage.getItem('loginZh'),
					}
					this.$axios.post('rootpath/api/shoppingCart/numUpdate', cartNum, function(res){

					})
					.then((res)=>{
						console.log(res.msg)
						// this.$router.go(0)
					})
					.catch((err)=>{
						console.log(err)
					})

				}else{
					item.goods_num=1;
				}
				
			},
			//删除
			del(id){
				console.log(id)
				console.log(window.localStorage.getItem('loginZh'))
				// this.ShoppingCart;
				// this.ShoppingCart.splice(index,1);
				this.$axios.post('rootpath/api/shoppingCart/del',{id:id,username:window.localStorage.getItem('loginZh')},function(res){})
				.then((res)=>{
					console.log(res.msg)
					this.$router.go(0)
				})
				.catch((err)=>{
					console.log(err)
				})

			},
			
			
			checkAll() {
				var _this = this
	        if (this.checkall) {
	            this.checked = [];
	           console.log(_this.ShoppingCart)
	        } else {
	            this.checked = []
	            this.ShoppingCart.forEach(function (item) {
	                _this.checked.push(item.goods_id)
	            })
	        }
	    	},
	    	  
			//反选
	    	check(){
	    		console.log(this.checked);
				console.log(this.checked[0])
	    		 if (this.checked.length  == this.ShoppingCart.length) {
		            this.checkall = true
		       }else{
		        	  this.checkall = false
		        }
	    	},
	    	//判断是否登录，如果登录就去购物车，没登陆就去登录界面
	    	statusCart(){
	        	var statuscars = window.localStorage.getItem('loginZh');
	        	console.log(statuscars)
	        	if(statuscars == null){
	        		alert('您还没登录，请您先登录...')
	        		this.$router.push({path:'/Use/Login'})
	        	}else{
	        		this.$router.push({path:'/ShoppingCart'})
	        	}
	        }

		},
		watch:{
			//watch监听解决@click和v-model层级问题
		        checked:{//深度监听，可监听到对象、数组的变化
		              handler(val, oldVal){
		              	this.check();
			            },
		            deep:true
		        },
		        checkall(val, oldVal){//普通的watch监听
		            this.checkall=!oldVal;
		        }

	        },
		filters:{
			//过滤器实现小计功能
			keepTwoNum:function(value){
				value=Number(value);
				// toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
				return value.toFixed(2);
			}
		},
		computed: {
	        //计算总数量
	          numTotale: function() {
	            var total = 0;
	            for(var i = 0; i < this.checked.length; i++) {
					console.log(this.checked)
					console.log(this.ShoppingCart[i])
	                var item = this.ShoppingCart[i];
	                    total +=Number(item.goods_num);
	            }
	            return total;
	        },
	        //计算总数
	        priceTotal:function(){
	        	var total = 0;
				var prices=0;	
				var totalPrice=0;
				for(var i = 0; i < this.checked.length; i++) {
	                var item = this.ShoppingCart[i];
	                    prices +=Number(item.shop_price)*Number(item.goods_num)
	                    console.log(prices.toFixed(2))
	            }
	            //结果保留两位小数
	            return prices.toFixed(2);
	        }
	        
       },

		created(){
			this.statusCart();
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	@import url("../../../styles/main.less");
	.ShoppingCart{
		.cart_box{
			.margin(100,150,100,150);
			.w(75);
			.h(75);
			.lh(75);
			background:#fff;
			text-align:center;
			.border-radius(50%);
		}
		.kong{
			.fs(16);
			.margin(0,100,0,100);
			
		}
		.manjian{
			.w(375);
			.h(68);
			.lh(68);
			background:#FAFAFA;
			border-bottom:1px solid #E2E2E2;
			.manjian_desc{
				text-align:center;
				.fs(16);
				a{color:#ff2837;}
					
			}
		}
		.cartList{
			.w(375);
			height: auto;
			height:auto;
			li{
				.w(375);
				.h(131);
				.padding(15,15,15,15);
				background:#fff;
				border-bottom:1px solid #E2E2E2;
				#checkbox_1{
					.w(20);
					.h(30);
				}
				.goods_img{
					display: inline-block;
					.w(94);
					.h(94);
					img{
						.w(94);
						.h(94);	
					}
				}
				
			}
			.goods_desc{
				    float: right;
					display: inline-block;
					.w(200);
					.h(94);
					.p{
						position: relative;
						.fs(12);
						color: #535353;
						.w(150);
						.h(36);
						.lh(36);
						img{
							position: absolute;
							right: -40px;
							top: 12px;
							.w(21);
							.h(21);
							
						}
					}
					#text_box{
						.w(50);
						.h(26);
						.lh(26);
						text-align: center;
						background:#f0f0f0;
						.border-radius(13);
					}
					span{
						img{
							.w(14);
							.h(14);
						}
					}
					.xiaoji{
						.fs(14);
						color:#ff2837;
						margin-left:10px;
					}
				}
		}
		.jiesuan{
			position: fixed;
			right: 0;
			left: 0;
			bottom: 50px;
			.w(375);
			.h(71);
			.lh(71);
			background: #DDDDDD;
			z-index: 99;
			.fs(14);
			.left_box{
				float: left;
				.padding(0,15,0,15);
				#checkAll{
					.w(20);
					.h(20);
				}
				.totalPrice{
					.fs(16);
					color:#ff2837;
					font-weight: bold;
				}
			}
			.right_box{
				float: right;
				.desc{
					.w(110);
					.h(40);
					.lh(40);
					text-align: center;
					.border-radius(20);
					background:orange;
					color: #fff;
					.margin(15,15,15,15);
				}
				
				
			}
		}
	}
	
</style>