<template>
	
	<div class="header__wrap">
		<el-row>
			<el-col :span="4">
				<span style="color:red">logo</span>
			</el-col>
			<el-col :span="10">
				<div class="nav-wrap">

					<el-menu default-active="1" class="el-menu-demo" mode="horizontal"   background-color="#000" 
						text-color="#fff"  active-text-color="red">
						<el-menu-item index="1" @click="handle('/')">Trang chủ</el-menu-item>
						<el-submenu  index="2">
							<template  slot="title"  >Danh mục sản phẩm</template>
								<el-menu-item index="2" v-for="(item, index) in listCategory" :key="index">
									<nuxt-link style="color:#fff"  :to="{ path: `/categories/${item.slug}`}">{{item.name}}</nuxt-link>
								</el-menu-item>

						
						</el-submenu>
						<el-menu-item index="3" @click="handle('/introduce')" >Giới thiệu</el-menu-item>
						<el-menu-item index="4"  @click="handle('/contact')">Liên hệ </el-menu-item>

						</el-menu>
			
					
				</div>
			</el-col>

			<el-col :span="6">
				
				<div class="search">
					<div>
					<el-input class="inputSearch" @keyup.native.enter="submit" size="mini"  placeholder="Search...." v-model="input">
					
					</el-input>
					</div>
					<div class="icon__search">
						<i  class="el-icon-search"></i>
					</div>
				</div>
			
			</el-col>

			<el-col :span="4">
			
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
</template>

<script>
import Cart from './Cart'
import {mapState,mapGetters} from 'vuex'



export default {
	data(){
		return{
		
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
		},
		loadData1(){
 			this.$store.dispatch('search/listSearch',{
				 limit:10,
				 q:this.input
			 })
		},
		submit(){
			// this.$store.commit('search/SET_SEARCH_TEXT',this.input)
			this.loadData1()
			this.$router.push('/search')
		
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

.el-menu--horizontal {
border-bottom: solid #000 !important;
}
.header__wrap{
	background-color:#000 ;
} 

.inputSearch .el-input__inner{
	border: 0;
	 border-bottom: 2px solid #e5e5e5;
	 background-color: #000 !important;
	 border-radius:0 ;
	padding: 0  30px 0 0;
	 color: #fff;
	 
	 
} 
.inputSearch{
	line-height: 63px;
}
.search{
	position: relative;
	width: 80%;
}
.icon__search{
	position: absolute;
	right: 0;
	top: 20px;
	color: #fff;
}
</style>