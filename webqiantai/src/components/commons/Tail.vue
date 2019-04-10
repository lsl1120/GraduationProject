<template>
	<div class="tail">
		<router-link v-for="(item,index) in Tlist" :key=index :to="item.router"  active-class="active">
			<i :class="item.icon"></i>
			<p>{{item.title}}</p>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:"Tail",
		components:{},
		data(){
			return{
				name:'我是Tail',
				Tlist:[
				{router:'/Home',icon:'fa fa-home',title:'首页'},
				{router:'/Classification',icon:'fa fa-th-large',title:'分类'},
				{router:'/ShoppingCart',icon:'fa fa-shopping-cart',title:'购物车'},
				{router:'/Use',icon:'fa fa-user',title:'我的'},
				],
				sel:0
			}
		},
		methods:{
			
			
		}
	}

</script>

<style lang="less" scoped="scoped">
	@import url("../../styles/main.less");
	.tail{
		/*.w(375);*/
		.h(50);
		background:#fff;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		border-top: 1px solid #e2e2e2;
    	border-bottom: 1px solid #e2e2e2;
    	display:flex;
    	justify-content:space-between;
    	a{
    		display:inline-block;
    		.w(93);
    		.h(50);
    		text-align:center;
    		color: #535353;
    		.fs(12);
    		i{
    			.padding(3,0,0,0);
    			.fs(25);
    		}
    	}
    	.active{
    		color: palevioletred;
    	}
	}
</style>