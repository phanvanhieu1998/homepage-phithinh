<template>
  	<div class="container">
	 	<el-tabs v-model="activeName" >
			<el-tab-pane   label="Sản Phẩm Mới Nhất" name="first">
				<div class="container main">
						<el-row :gutter="20" >
					<el-col data-aos="zoom-in" data-aos-duration="3000" :sm="12"   :md="6" v-for="item in productNew " :key="item.id" class="men_fashion">
						<nuxt-link :to="{ path: `/detail/${item.slug}`}">
							<img  :src="item.images">
						</nuxt-link>
						<div v-if="item.discount !== null "  class="discount">
								<span v-if="item.discount == null">
							</span>
							<span style="color:red;font-weight:600" v-else>
								{{item.discount}}%
								<strong class="discount1" style="color:white;font-size:0.8rem">GIẢM</strong>
							</span>
						</div>
			
						<div class="description1">
							
							<span >{{item.name}}</span><br>

						</div>
						<div class="price">
								<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price.toLocaleString('it-IT')}}đ</span>
								<span  style="color: red;"  v-else>{{item.sale_price.toLocaleString('it-IT')}}đ</span>
								<span  style="color: red;"  v-if="item.sale_price !== item.price ">
									{{item.sale_price.toLocaleString('it-IT')}}đ
								</span>
						</div>

					</el-col>
				</el-row>
				</div>

			</el-tab-pane>

			<el-tab-pane label="Sản Phẩm Bán Chạy Nhất" name="second">
				<div class="container main">
					<el-row :gutter="20" >
					<el-col data-aos="zoom-in" data-aos-duration="3000" :sm="12"  :md="6" v-for="item in productBestseller " :key="item.id" class="men_fashion">
						<nuxt-link :to="{ path: `/detail/${item.slug}`}">
							<img  :src="item.images">
						</nuxt-link>
						<div v-if="item.discount !== null "  class="discount">
								<span v-if="item.discount == null">
							</span>
							<span style="color:red;font-weight:600" v-else>
								{{item.discount}}%
								<strong class="discount1" style="color:white;font-size:0.8rem">GIẢM</strong>
							</span>
						</div>
			
						<div class="description1">
							
							<span >{{item.name}}</span><br>

						</div>
						<div class="price">
								<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price.toLocaleString('it-IT')}}đ</span>
								<span  style="color: red;"  v-else>{{item.sale_price.toLocaleString('it-IT')}}đ</span>
								<span  style="color: red;"  v-if="item.sale_price !== item.price ">
									{{item.sale_price.toLocaleString('it-IT')}}đ
								</span>
						</div>

					</el-col>
				</el-row>
				</div>
			</el-tab-pane>
 		 </el-tabs>
 	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data(){
		return{
			activeName: 'first'
		}
	},
	methods:{
		loadData(){
			this.$store.dispatch('productNewBestseller/productNew').then((res) =>{
			
			})
			this.$store.dispatch('productNewBestseller/producBestseller').then((res) =>{
			
			})
			
		},
	},
	mounted(){
		this.loadData()
	
		
	},
	computed:{
		...mapState({
			productNew:state => state.productNewBestseller.productNew,
			productBestseller : state =>state.productNewBestseller.productBestseller
		})
	}
}
</script>

<style>

.el-tabs__nav-scroll{
	display: flex;
    justify-content: center;
    margin-top: 30px;
}


</style>