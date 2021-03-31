<template>
	<div>
		<div class="top_bar_line ">
			<el-row class="container" >
				<el-col :span="12" >
					<div class="top_bar_line_left">
						<ul class="menu">
							<li class="menu__left"  v-for="(item, index) in menuTop" :key="index">
								<a href="#">{{item.myAccount}}</a>
								
							</li>
						</ul>
					</div>
				</el-col>

				<el-col :span="12">
					<div data-aos="flip-up">kaka</div>
				</el-col>
			</el-row>
		</div>

		<div class="container">
			<div class="header__wrap">
				<el-row>
					<el-col :span="8">
						<div class="header__wrap__search">
							<el-input style="width:80%" placeholder="Search Product..." v-model="input"></el-input>
						</div>
					</el-col>

					<el-col :span="8">
						<div >
							<h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="3000" >Phí Thịnh Shop</h1>
						</div>

					</el-col>

					<el-col :span="8">
						<div class="header__wrap__cart">
							<el-badge :value="lengthProduct"  class="item">
								<el-dropdown trigger="click">
									<span class="el-dropdown-link">
										<el-button type="primary">Cart</el-button>
									</span>
									<Cart/>
						
								</el-dropdown>
							</el-badge>
						</div>
						
					</el-col>
				</el-row>
			</div>

			<div class="nav-wrap">


				<!-- <ul class="nav__wrap__menu">
					<li 
						:class="link.custom_class" 
						v-for="link in menu_links" 
						:key="link.slug">
						<NuxtLink :to="link.slug" v-if="link.router">{{link.name}}</NuxtLink>
						<a :href="link.slug" target="_blank" v-else>
						{{link.name}}
						</a>

					</li>
				</ul>  -->

					<el-menu default-active="1" class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1" @click="handle('/')">Trang chủ</el-menu-item>
  <el-submenu  index="2">
    <template  slot="title"  >Danh mục sản phẩm</template>
    <!-- <el-menu-item index="2-1" @click="handle('/men_fashion')">Thời trang nam</el-menu-item>
    <el-menu-item index="2-2" @click="handle('/women_fashion')" >Thời trang nữ</el-menu-item> -->
		<el-menu-item  v-for="(item, index) in listCategory" :key="index">
			<nuxt-link :to="{ path: `/categories/${item.slug}`}">{{item.name}}</nuxt-link>
		</el-menu-item>

 
  </el-submenu>
  <el-menu-item index="3" @click="handle('/introduce')" >Giới thiệu</el-menu-item>
  <el-menu-item index="4"  @click="handle('/contact')">Liên hệ </el-menu-item>

</el-menu>
		
			</div>
		</div>
	</div>
</template>

<script>
import Cart from './Cart'
import {mapState,mapGetters} from 'vuex'



export default {
	data(){
		return{
			menuTop:[
				{
					myAccount:'My Account'
				},
				{
					myAccount:'About Us'
				},
				{
					myAccount:'Contact'
				},
				{
					myAccount:'Phone: 0378888918'
				}
			],
			 menu_links: [
				{slug: '/', name: 'Trang chủ', custom_class: '', router: true},
				{slug: '', name: 'Danh mục sản phẩm', custom_class: '', router: true,
				
				},
				{slug: 'introduce', name:'Giới thiệu', custom_class: '', router: true},
				{slug: 'contact', name: 'Liên hệ', custom_class: '', router: false},
				
 
       
      ],
			input:''
		}
	},
	components:{
		Cart


	},
	methods:{
		handle(path){
			this.$router.push({path:path})
			
		},
		 loadData(){
      	  this.$store.dispatch('categorys/listCategory')

      },
	  	checkout(path){
				this.$router.push({path:path})
		}
	},

	 mounted(){
		this.loadData()
		this.listCategory
		
		
	
    },
	 computed:{
      ...mapState({
         listCategory: state => state.categorys.listCategory,
         
        
      }),
	  ...mapGetters({
		  lengthProduct: 'detail/lengthProduct',
		
	  })
	

	 
     
    }
}
</script>

<style>



</style>