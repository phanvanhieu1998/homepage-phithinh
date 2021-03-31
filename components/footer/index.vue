<template>
	<div class="container">
		<div class="footer">
			<el-row>
				<el-col  :span="6" :lg="6">
					<h3>Danh mục sản phẩm</h3>
					<ul>
					
						<li v-for="(item, index) in listCategory " :key="index">
							<nuxt-link :to="{ path: `/categories/${item.slug}`}">{{item.name}}</nuxt-link>
						</li>
					</ul>
				</el-col>
				<el-col :span="6" :lg="6">
					<h3>Trợ Gíup</h3>
					<ul>
						<li v-for="link in menu_links"
						:key="link.slug">
						<NuxtLink :to="link.slug" v-if="link.router">{{link.name}}</NuxtLink>
						<a :href="link.slug" target="_blank" v-else>
						{{link.name}}
						</a>

						</li>
					</ul>
				</el-col>
				<el-col :span="6" :lg="6">
					<h3>Liên Hệ</h3>
				</el-col>
				<el-col :span="6" :lg="6">
					<h3>Đăng Kí Tin Tức</h3>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data(){
		return{
			  menu_links: [
			 	{slug: '/shopping-guide', name: 'Hướng dẫn mua hàng', custom_class: '', router: true},
			 	{slug: '/delivery-policy', name: 'Chính sách giao hàng', custom_class: '', router: true},
				 {slug: '/refund-policy', name: 'Chính sách đổi trả', custom_class: '', router: true},
				 {slug: 'policies-and-terms', name: 'Chính sách & Điều khoản', custom_class: '', router: true},
			
 
       
     		 ],
		}
	},
	computed:{
		...mapState({
			listCategory: state => state.categorys.listCategory,
			
        
      }),
	
	

	 
     
    }
}
</script>

<style>
.footer{
	width: 100%;
	height: 400px;
	background-color: black;
	color: white;;
}
</style>