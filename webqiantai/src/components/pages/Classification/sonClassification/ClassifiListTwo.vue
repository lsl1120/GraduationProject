<!--  -->
<template>
<div class='ClassifiListTwo'>
    	<Header></Header>
		<div class="classifiList"
			v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
			>
			<ul>
				<li v-for="(item,index) in classifiListTwo" :key=index>
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
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//引入Header组件
	import Header from '../../../commons/Header'
	//引入Tail组件
    import Tail from '../../../commons/Tail'

    import Vue from 'vue'
	import { Toast,InfiniteScroll  } from 'mint-ui';
	Vue.use(InfiniteScroll);

    let id = ''

export default {
name:"ClassifiList",
//import引入的组件需要注入到对象中才能使用
components: {Header,Tail},
data() {
//这里存放数据
return {
    name:'我是ClassifiList',
	classifiListTwo:[],
	page:0,
	pagesize:5,
	classify:2,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
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
					this.classifiListTwo=this.classifiListTwo.concat(res.data)
						this.page++
						this.toast.close();
						console.log(this.classifiListTwo)
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
					console.log('请您先登录')
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
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
	@import url("../../../../styles/main.less");
	
	.ClassifiListTwo{
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