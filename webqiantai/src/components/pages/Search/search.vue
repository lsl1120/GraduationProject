<template>
<div class='searchlist'>
    <ul class="goodList list-contain"
			v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="60"
			>
			
			<li v-for="(item,index) in searchList" :key='index'>
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
        <Tail></Tail>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Vue from 'vue'
import Tail from '../../commons/Tail'
import { Toast,InfiniteScroll  } from 'mint-ui';
    Vue.use(InfiniteScroll);
let page=0;
let pagesize=5;

export default {
    name:"searchList",
//import引入的组件需要注入到对象中才能使用
components: {Tail},
data() {
//这里存放数据
return {
    searchList:[],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    loadMore(){
				if(page<=3){
					this.onClick();
				}
			},

    onClick(){
        console.log(this.$route.query.search)
        this.$axios.post('rootpath/api/goodsList/search',{searchname:this.$route.query.search},function(res){})
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            this.searchList = res.data
            console.log(this.searchList)
        })
        .catch((err)=>{
            console.log('搜索失败')
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
		
			}
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
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import '../../../styles/main.less';
.searchlist{
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