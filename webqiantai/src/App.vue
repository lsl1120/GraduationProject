<template>
  <div id="app">
			<router-view></router-view>
  </div>
</template>

<script>
	//引入Home组件
//	import Home from './components/pages/Home/Home'
	
export default {
  name: 'App',
  //注册组件
  components:{},
  data(){
  	return{
  		name:111
  	}
  }
}
</script>

<style>

</style>



