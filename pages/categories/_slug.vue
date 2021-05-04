<template>
  	<div  v-loading="loading">
		<BannerCategory :valueSlug="slug"/>
		<div class="container main" v-if="productByCategory">
			<!-- <div  data-aos="fade-up-right" data-aos-duration="3000" v-for="item in productByCategory " :key="item.id" class="men_fashion"> -->
								<el-row :gutter="20" >
					<el-col data-aos="zoom-in" data-aos-duration="3000"  :md="6" v-for="item in productByCategory " :key="item.id" class="men_fashion">
						<nuxt-link :to="{ path: `/detail/${item.slug}`}">
							<img  :src="item.images[0]">
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
  </div>
</template>
<script>
import BannerCategory from '~/components/productByCategory/BannerCategory'
import { mapState } from'vuex'
export default {
	data(){
		return{
	
			loading:false,
		
		}
	},

	methods:{
		loadData(){
			this.loading=true
			this.$store.dispatch('productByCategory/productByCategory',this.slug).then((res)=>{
				this.loading=false
			})
		},
	
	},

	mounted(){
		this.loadData()
		
	},
	computed:{
		...mapState({
			productByCategory: state => state.productByCategory.productByCategory
		}),
		slug(){
			return this.$route.params.slug
		},
		
	},
	components:{
		BannerCategory
	}
}

</script>

<style>


</style>