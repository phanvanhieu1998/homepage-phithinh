<template>
  	<div class="container">


	  	<div class="allProduct">
			<div class="all__product__hot__trend">
				<span>Hot Trend</span>
			</div>
			
			<div style="margin-top:20px">
				<h5 style="font-size:30px">Tất cả sản phẩm</h5>
			</div>
		</div>

		<div class="show__pagination" >
			<span style="margin-left:14px;line-height: 32px;">
				hiển thị {{(totalData == 0) ? 0 : ((limit * (page - 1)) + 1)}} - {{ (limit * page) > totalData ? totalData : (limit * page) }}  của {{totalData}} sản phẩm
			</span>
			
			<el-pagination  
				background  layout="prev, next" @current-change="set_page" :page-size="limit" :total="totalData">
			</el-pagination>   

		</div>
	
	 	<div class="container main">
			<!-- <div  data-aos="zoom-in" data-aos-duration="3000"  > -->
				
				<el-row :gutter="20" >
					<el-col data-aos="zoom-in" data-aos-duration="3000" :sm="12"  :md="6" v-for="item in listProduct " :key="item.id" class="men_fashion">
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
	
			<!-- </div> -->
		</div>

		 <el-pagination :hide-on-single-page="true"  class="pagination"  :current-page="page"
			
			background layout="prev, pager, next" @current-change="set_page" :page-size="limit" :total="totalData">
		</el-pagination>   
	
  </div>
  
</template>


<script>
import { mapState } from 'vuex'
export default {
	data(){
		return{

			loading:false
		}
	},
	methods:{
		loadData(){
			this.$store.dispatch('product/listProduct').then((res) =>{
			
			})
		},
		set_page(page){
        	this.$store.commit('product/SET_PAGE',page)
         	this.loadData()
    }
	},
	mounted(){
		this.loadData()

	},
	computed:{
		...mapState({
			listProduct:state => state.product.listProduct,
			totalData : state => state.product.totalData,
          	page: state =>state.product.page,
          	limit : state =>state.product.limit,
		}),
	
	
	}
}

</script>

<style>

</style>