import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home'
import Classification from '../components/pages/Classification/Classification'
import ShoppingCart from '../components/pages/ShoppingCart/ShoppingCart'
import Use from '../components/pages/Use/Use'
import ClassifiList from '../components/pages/Classification/sonClassification/ClassifiList'
import ClassifiListTwo from '../components/pages/Classification/sonClassification/ClassifiListTwo'
import Login from '../components/pages/Use/Login'
import Reg from '../components/pages/Use/Reg'
import MyInformation from '../components/pages/Use/MyInformation'
import goodsInfo from '../components/pages/goodsInfo/goodsInfo'
import search from '../components/pages/Search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
      component: Home
    },
    //首页路由
    {
    	path: '/Home',
      name: 'Home',
      component: Home
    },
    //分类路由
    {
    	path: '/Classification',
      name: 'Classification',
      component: Classification,
      
    },
    //分类页面1路由
    {
    	 	path:'/ClassifiList',
      	name:'ClassifiList',
      	component:ClassifiList
    },
    //分类页面2路由
    {
      path:'/ClassifiListTwo',
     name:'ClassifiListTwo',
     component:ClassifiListTwo
    },
    //购物车路由
    {
    	path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    //详情页路由
    {
    	path: '/goodsInfo',
      name: 'goodsInfo',
      component: goodsInfo
    },
    //我的路由
    {
    	path: '/Use',
      name: 'Use',
      component: Use,
       children:[
       		{path:'Login',name:'Login',component:Login},
        	{path:'Reg',name:'Reg',component:Reg},
          {path:'MyInformation',name:'MyInformation',component:MyInformation},
       ]
    },
    //搜索页列表路由
    {
      path: '/search',
      name: 'search',
      component: search,
    },
  ]
})
