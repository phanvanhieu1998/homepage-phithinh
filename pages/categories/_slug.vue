<template>
  	<div  v-loading="loading">
		<BannerCategory :valueSlug="slug"/>
		<div class="container main" v-if="productByCategory">
			<div  data-aos="fade-up-right" data-aos-duration="3000" v-for="item in productByCategory " :key="item.id" class="men_fashion">
				<nuxt-link :to="{ path: `/detail/${item.slug}`}">
					<img  :src="item.images[0]">
				</nuxt-link>

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

				<div class="price">
					<span v-if="item.sale_price !== item.price" class="price__product"> {{item.price.toLocaleString('it-IT')}}đ</span>
					<span  style="color: red;"  v-else>{{item.price.toLocaleString('it-IT')}}đ</span>
					<span  style="color: red;"  v-if="item.sale_price !== item.price ">
						{{item.sale_price.toLocaleString('it-IT')}}đ
					</span>
				</div>


			</div>
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
		console.log(this.productByCategory)
		console.log(this.slug) 
		
	

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
.main{
display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
margin-bottom: 40px;
justify-content: center;
}
.men_fashion {

	position: relative;
	background-color: white;
	margin: 17px;
	
	width: 250px;
	
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

	display: block;
	
}
.description1{
	padding: 10px 10px 0;
	word-wrap: break-word;
	 height: 23px;  
	 overflow: hidden;
	 display: block;
	 display: -webkit-box;
	 -webkit-box-orient:vertical;
	 -webkit-line-clamp: 2;
	 text-align: center;

	
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
.price {
	
	text-align: center;


}
.hicc{
	display: flex;
	justify-content: space-evenly
}



</style>