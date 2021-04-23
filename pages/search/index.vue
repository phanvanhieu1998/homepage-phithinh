<template>
  	<div  v-loading="loading">
	    <span v-if="listSearch.length == 0">
				 <p style=" color:#000; text-align:center"> không tìm thấy: {{search_text}}</p>
		</span>
	
	 	<div class="container main">
		 	<div  data-aos="fade-up-right" data-aos-duration="3000" v-for="item in listSearch " :key="item.id" class="men_fashion" >
			 
				<nuxt-link :to="{ path: `/detail/${item.slug}`}">
				<img  :src="item.images"></nuxt-link>

				<div v-if="item.discount !== null "  class="discount">
				 	<span v-if="item.discount == null">
			 		</span>
					<span style="color:red;font-weight:600" v-else>
						{{item.discount}}%
						<strong class="discount1" style="color:white;font-size:0.8rem;padding:0">GIẢM</strong>
					</span>
				</div>
			
				<div class="description1">
				
					<span >{{item.name}}</span><br>
				
				</div>
				<div class="price1">
					<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price.toLocaleString('it-IT')}}đ</span>
					<span  style="color: red;"  v-else>{{item.price.toLocaleString('it-IT')}}đ</span>
					<span  style="color: red;"  v-if="item.sale_price !== item.price ">
						{{item.sale_price.toLocaleString('it-IT')}}đ
					</span>
				</div>
			</div>

			
			
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
.main{
display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
margin-bottom: 40px;
height: auto;
}
.men_fashion {

	position: relative;
	background-color: white;

	
	
	width: 250px;
	
	margin: 17px;
	cursor: pointer;
	transition: transform linear 0.1s;
	will-change: transform;
}
.discount1{

	position: absolute;
	top:20px;
	left: 0px;
}
.men_fashion:hover{
	transform: translateY(-1px);
}
.men_fashion img{
	background-color: white;
	width: 100%;
	margin: 0;
	display: block;
	height: 350px;
	
}
.description1{
	padding: 10px 10px 0;
	word-wrap: break-word;
	 
	 overflow: hidden;
	 display: block;
	 display: -webkit-box;
	 -webkit-box-orient:vertical;
	 -webkit-line-clamp: 2;

	
}
.price__product{
	
	text-decoration-line:line-through
}
.discount{
	background-color:rgba(255,212,36,.9) ;
	text-align: center;
	width: 40px;
	height: 36px;
	position: absolute;
	right: 0;
	top:0;

	
}
.discount::after{
	content: '';
	position: absolute;
	left: 0;
	bottom: -5px;
	border-width: 0 20px 6px;
	border-style:solid;
	border-color: transparent rgba(255,212,36,.9) transparent rgba(255,212,36,.9);
}
.price1{
	
	text-align: center;

}





</style>