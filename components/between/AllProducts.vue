<template>
  <div class="container">
	  	<div class="allProduct">
			  <h5>Tất cả sản phẩm</h5>
		  </div>
	  	 <div class="container main">
		 <div  data-aos="fade-up-right" data-aos-duration="3000" v-for="item in listProduct " :key="item.id" class="men_fashion">
			 
			<nuxt-link :to="{ path: `/detail/${item.slug}`}">
			<img  :src="item.images"></nuxt-link>
			<div v-if="item.discount !== null "  class="discount">
				 <span v-if="item.discount == null">
			 </span>
			  <span style="color:red;font-weight:600" v-else>
				 {{item.discount}}%
				 <strong style="color:white;font-size:0.8rem">GIẢM</strong>
			 </span>
			</div>
			<!-- <span style="padding:10px">{{item.name}}</span><br> -->
			 <div class="description1">
				
				<span >{{item.name}}</span><br>

			 </div>
			 <div class="price">
					<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price.toLocaleString('it-IT')}}đ</span>
					<span  style="color: red;"  v-else>{{item.price.toLocaleString('it-IT')}}đ</span>
					<span  style="color: red;"  v-if="item.sale_price !== item.price ">
						{{item.sale_price.toLocaleString('it-IT')}}đ
					</span>
				</div>
			<div>
			
			</div>
			 <div class="hicc">
				 <el-rate
					v-model="value"
					:texts="['oops','disappointed', 'normal', 'good', 'great']"
					show-text>
				</el-rate>
			 </div>


		 </div>

	 </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data(){
		return{
	value: null,
			loading:false
		}
	},
	methods:{
		loadData(){
			this.$store.dispatch('product/listProduct').then((res) =>{
			
			})
		},
	},
	mounted(){
		this.loadData()
		
	},
	computed:{
		...mapState({
			listProduct:state => state.product.listProduct
		})
	}
}
</script>

<style>
.main{
display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
margin-bottom: 40px;
}
.men_fashion {

	position: relative;
	background-color: white;
	 box-shadow: 0 0 0.4rem 0 #0b9471;
	border-radius: .5rem;
	
	width: 205px;
	margin: 10px;
	cursor: pointer;
	transition: transform linear 0.1s;
	will-change: transform;
	
}
.allProduct h5{
	font-size: 30px;
	text-align: center;
}
.men_fashion:hover{
	transform: translateY(-1px);
}
.men_fashion img{
	background-color: white;
	width: 90%;
	margin: 10px;
	display: block;
	
}
.description1{
	padding: 10px 10px 0;
	word-wrap: break-word;
	 height: 42px;  
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
	height: 42px;
	position: absolute;
	right: 0;
	top:0;
	  border-top-right-radius: .5rem;
	
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
.price{
	display: flex;


}
</style>