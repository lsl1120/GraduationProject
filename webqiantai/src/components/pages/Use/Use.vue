<template>
	<div class="Use">
		<router-view></router-view>
		<Tail></Tail>
	</div>
</template>

<script>
	//引入Tail组件
	import Tail from '../../commons/Tail'
	
	export default{
		name:"Uses",
		components:{Tail},
		data(){
			return{
				name:'我是Use',
				
			}
		},
		methods:{
			getLocalStorage(){
				var Zh = window.localStorage.getItem('loginZh');
				if(Zh == null){
					this.$router.push('/Use/Login');
				}else{
					this.$router.push('/Use/MyInformation');
				}
			}
		},
		created(){
//			this.$router.push('/Use/Reg');
			this.getLocalStorage();
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import url("../../../styles/main.less");
</style>