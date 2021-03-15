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
					kaka
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
							<h1>Phí Thịnh Shop</h1>
						</div>

					</el-col>

					<el-col :span="8">
						<div class="header__wrap__cart">
							<span>Cart</span>
						</div>
					</el-col>
				</el-row>
			</div>

			<div class="nav-wrap">
				<ul class="nav__wrap__menu">
					<li 
						:class="link.custom_class" 
						v-for="link in menu_links" 
						:key="link.slug">
						<NuxtLink :to="link.slug" v-if="link.router">{{link.name}}</NuxtLink>
						<a :href="link.slug" target="_blank" v-else>
						{{link.name}}
						</a>
					</li>
				</ul> 
			</div>
		</div>
	</div>
</template>

<script>
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
				{slug: 'categorys', name: 'Danh mục sản phẩm', custom_class: '', router: true},
				{slug: 'introduce', name:'Giới thiệu', custom_class: '', router: true},
				{slug: 'contact', name: 'Liên hệ', custom_class: '', router: false},
				
 
       
      ],
			input:''
		}
	}
}
</script>

<style>

</style>