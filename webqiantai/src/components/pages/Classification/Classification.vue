<template>
	<div class="classification">
		<Header></Header>
			<div class="classifyContent">
				<div class="classifyAll">
					<h1>
						<img src="../../../../static/img/classification/caption-all.jpg"/>
					</h1>
					<div class="zhe">
						<router-link v-for="(item,index) in zhe" :key=index :to="item.router">
							<img :src="item.zheImg"/>
						</router-link>
					</div>
				</div>

				<!-- <div class="classifyCategory">
					<h1>
						<img src="../../../../static/img/classification/caption-category.jpg"/>
					</h1>
					<div class="jie">
						<router-link v-for="(item,index) in jie" :key=index :to="item.router" active-class="active">{{item.jieText}}</router-link>
						
					</div>
				</div> -->

				<!-- <div class="classifyEfficacy">
					<h1>
						<img src="../../../../static/img/classification/caption-effect.jpg"/>
					</h1>
					<div class="jie">
						<router-link v-for="(item,index) in bu" :key=index :to="item.router" active-class="active">{{item.buText}}</router-link>
					
					</div>
				</div> -->

			</div>
		<Tail></Tail>
	</div>
</template>

<script>
	//引入Header组件
	import Header from '../../commons/Header'
	//引入Tail组件
	import Tail from '../../commons/Tail'
	
	
	export default{
		name:"Classification",
		components:{Header,Tail},
		data(){
			return{
				name:'我是Classification',
				zhe:[
				{router:'/ClassifiList',zheImg:'../../../../static/img/classification/makeup.jpg'},
				{router:'/ClassifiListTwo',zheImg:'../../../../static/img/classification/skin.jpg'},
				{router:'/ClassifiList',zheImg:'../../../../static/img/classification/mask.jpg'},
				{router:'/ClassifiList',zheImg:'../../../../static/img/classification/perfume.jpg'},
				{router:'/ClassifiList',zheImg:'../../../../static/img/classification/tools.jpg'},
				{router:'/ClassifiList',zheImg:'../../../../static/img/classification/foods.jpg'},
				
				],
				jie:[
				{router:'/ClassifiList',jieText:'洁面'},
				{router:'/ClassifiList',jieText:'BB霜'},
				{router:'/ClassifiList',jieText:'底妆'},
				{router:'/ClassifiList',jieText:'隔离'},
				{router:'/ClassifiList',jieText:'面霜'},
				{router:'/ClassifiList',jieText:'乳液'},
				{router:'/ClassifiList',jieText:'面膜'},
				{router:'/ClassifiList',jieText:'香水'},
				{router:'/ClassifiList',jieText:'精华水'},
				{router:'/ClassifiList',jieText:'眼妆'},
				{router:'/ClassifiList',jieText:'唇妆'},
				{router:'/ClassifiList',jieText:'卸妆'},
				{router:'/ClassifiList',jieText:'粉饼'},
				
				],
				bu:[
				{router:'/ClassifiList',buText:'补水'},
				{router:'/ClassifiList',buText:'保湿'},
				{router:'/ClassifiList',buText:'祛痘'},
				{router:'/ClassifiList',buText:'美白'},
				{router:'/ClassifiList',buText:'控油'},
				{router:'/ClassifiList',buText:'遮瑕'},
				{router:'/ClassifiList',buText:'去黑眼圈'},
				{router:'/ClassifiList',buText:'淡斑'},
				{router:'/ClassifiList',buText:'去黑头'},
				
				]
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../../styles/main.less");
	.classification{
		.padding(0,0,80,0);
		.classifyContent{
			background:#fff;
			.classifyAll{
				h1{
					padding:3%;
					img{
						width:100%;
						.h(50);
					}
				}
				.zhe{
					/*.h(400);*/
					.padding(20,0,20,0);
					a{
						display:inline-block;
						margin-left:3%;
						margin-bottom:15px;
						box-shadow: 0px 3px 8px 1px #e2e2e2;
						width:45.5%;
						img{
							width:100%;
						}
					}
				}
				
			}
			.classifyCategory{
				h1{
					padding:3%;
					img{
						width:100%;
						.h(50);
					}
				}
				.jie{
					.padding(20,0,20,0);
					
					a{
						.fs(14);
						text-align:center;
						display:inline-block;
						width: 28%;
						border: 1px solid #E5E5E5;
						border-radius: 27px;
						.padding(10,0,10,0);
						color: #535353;
						margin-left:4%;
						
						
						
					}
				}
			}
			.classifyEfficacy{
				h1{
					padding:3%;
					img{
						width:100%;
						.h(50);
					}
				}
				.jie{
					.padding(20,0,20,0);
					
					a{
						.fs(14);
						text-align:center;
						display:inline-block;
						width: 28%;
						border: 1px solid #E5E5E5;
						border-radius: 27px;
						.padding(10,0,10,0);
						color: #535353;
						margin-left:4%;
						
					}
					
				}
			}
		}
	}
	
</style>