<template>
	<div class="infoFooter">
		<div class="addCart">加入购物车</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		name:'infoFooter',
		data(){
			return {
				name:'infoFooter'
			}
		},
		methods:{
			
		},
		created(){
			
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
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
</style>
