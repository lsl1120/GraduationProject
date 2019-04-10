<template>
	<div class="header">
		<div class="h_search">
			<!--<input type="text" name="" id="" value="" />-->
			<!-- <a href="#" class="fr" v-on:click="onClick">
				<img src="../../../static/img/search-input.png"/>
			</a> -->
			<router-link class="fr" :to="{ path:'/search', query: {search: this.searchText} }">
				<img src="../../../static/img/search-input.png" alt="">
			</router-link>
			<input type="text" id="searchId" value="" placeholder="搜索商品" v-model="searchText"  />
		</div>
	</div>
</template>

<script>
	export default{
		name:'Header',
		components:{},
		data(){
			return{
				name:'我是Header',
				searchText: '',
			}
		},
		methods: {
			// onClick: function() {
			// 	console.log("触发点击事件", this.searchText)
			// }
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../styles/main.less");
.header{
	width:100%;
	.h(60);
	/*.padding(10,10,10,10);*/
	padding:3%;
	border-bottom: 1px solid #E2E2E2;
	background:#f2f2f2;
	.h_search{
		.h(36);
		border-radius: 3px;
		background:#fff;
		input{
			vertical-align: top;
			padding:8px 6px;
			width:85%;
			/*height: 100%;*/
			font-size: 16px;
		}
		a{
			display: inline-block;
			font-size: 12px;
			padding: 5px;
			height: 100%;
			/*.lh(30);*/
			img{
				width: 100%;

			}
		}
		
	}
}
</style>