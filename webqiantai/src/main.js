// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '../static/css/font-awesome.css'
import '../static/css/base.css'
import './styles/main.less'

//引入vuex
import Vuex from 'vuex'
import store from './store/index.js'

//引入自己的ui框架
import backTop from '../backTop'
Vue.use(backTop)

//请求拦截
Axios.interceptors.response.use(function (response) {
    return response.data;
 }, function (error) {
    return Promise.reject(error);
  });
  
  //把axios挂载到实例
Vue.prototype.$axios=Axios

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  //挂载vuex实例
  Vuex,
  store,
  components: { App },
  template: '<App/>'
})
