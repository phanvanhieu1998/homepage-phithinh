<template>
	<div class="footer" >
		<div class="container" >
			<el-row>
				<el-col  :span="8" :lg="8">
					<h3>Danh mục sản phẩm</h3>
					<ul>
					
						<li style="padding:5px 0" v-for="(item, index) in listCategory " :key="index">
							<nuxt-link :to="{ path: `/categories/${item.slug}`}">{{item.name}}</nuxt-link>
						</li>
					</ul>
				</el-col>
				<el-col :span="8" :lg="8">
					<h3 style="margin:20px 0">Trợ Gíup</h3>
					<ul>
						<li style="padding:5px 0" v-for="link in menu_links"
						:key="link.slug">
						<NuxtLink :to="link.slug" v-if="link.router">{{link.name}}</NuxtLink>
						<a :href="link.slug" target="_blank" v-else>
						{{link.name}}
						</a>

						</li>
					</ul>
				</el-col>
				<el-col :span="8" :lg="8">
					<div class="footer_contact">

					</div>

				
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
			color:'red',
			  menu_links: [
			 	{slug: '/shopping-guide', name: 'Hướng dẫn mua hàng', custom_class: '', router: true},
			 	{slug: '/delivery-policy', name: 'Chính sách giao hàng', custom_class: '', router: true},
				 {slug: '/refund-policy', name: 'Chính sách đổi trả', custom_class: '', router: true},
				 {slug: 'policies-and-terms', name: 'Chính sách & Điều khoản', custom_class: '', router: true},
     		 ],
			//   menu_contact:[
			// 	  { name: 'Email:phanvanhieu0708@gmail.com', custom_class: '', router: true},
			//  	{ name: 'Hotline:0378888918', custom_class: '', router: true},
			// 	 { name: 'Địa chỉ: Tổ 2,Tân Thịnh,TP Thái Nguyên', custom_class: '', router: true},
			//   ]
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
	height: 200px;
	background-color: black;
	color: white;;
}
.footer a{
	    color: #b2b2b2;
}
.footer_contact p{
	    color: #b2b2b2;
cursor: pointer;
}
.footer_contact p:hover{
	color:  #717fe0;
}
.footer a:hover{
	    color:  #717fe0;
}
</style>