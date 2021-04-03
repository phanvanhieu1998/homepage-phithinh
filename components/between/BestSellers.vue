<template>
  <div class="container">
	

	 <el-tabs v-model="activeName" >
    <el-tab-pane   label="Sản Phẩm Mới Nhất" name="first">
				  	 <div class="container main">
		 <div  data-aos="fade-up-right" data-aos-duration="3000" v-for="item in productNew " :key="item.id" class="men_fashion">
			 
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
					<span  style="color: red;"  v-else>{{item.price}}đ</span>
					<span  style="color: red;"  v-if="item.sale_price !== item.price ">
						{{item.sale_price.toLocaleString('it-IT')}}đ
					</span>
				</div>
			<div>
			
			</div>
		


		 </div>

	 </div>

	</el-tab-pane>
    <el-tab-pane label="Sản Phẩm Bán Chạy Nhất" name="second">

						  	 <div class="container main">
		 <div  data-aos="fade-up-right" data-aos-duration="3000" v-for="item in productBestseller " :key="item.id" class="men_fashion">
			 
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
					<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price}}đ</span>
					<span  style="color: red;"  v-else>{{item.price}}đ</span>
					<span  style="color: red;"  v-if="item.sale_price !== item.price ">
						{{item.sale_price}}đ
					</span>
				</div>
			<div>
			
			</div>
		


		 </div>

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
.main{
display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
margin-bottom: 40px;
}
.el-tabs__nav-scroll{
	display: flex;
    justify-content: center;
    margin-top: 30px;
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