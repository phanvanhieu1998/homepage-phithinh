<template>
  	<div  v-loading="loading">
	    <span v-if="listSearch.length == 0">
				 <p style=" color:#000; text-align:center"> không tìm thấy: {{search_text}}</p>
		</span>
	
	 	<div class="container main">
			 								<el-row :gutter="20" >
					<el-col data-aos="zoom-in" data-aos-duration="3000"  :md="6" v-for="item in listSearch " :key="item.id" class="men_fashion">
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
		<el-pagination :hide-on-single-page="true"  class="pagination"  :current-page="page" 
		
				background layout="prev, pager, next" @current-change="set_page" :page-size="limit" :total="totalData">
		</el-pagination> 
 	</div>
</template>
<script>

import { mapState } from'vuex'
export default {
	data(){
		return{
			value: null,
			loading:false,

			
		}
	},

	methods:{
			set_page(page){
        	this.$store.commit('search/SET_PAGE',page)
         
    }
	},

	computed:{
		...mapState({
			listSearch:state => state.search.listSearch,
				totalData : state => state.search.totalData,
          	page: state =>state.search.page,
          	limit : state =>state.search.limit,
			  	search_text:state => state.search.search_text
		}),
	
		
	},

}

</script>

<style>




</style>