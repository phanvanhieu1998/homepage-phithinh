<template>
  <div>
	<BannerCategory :valueSlug="slug"/>
	 <div class="container main">
		 <div  v-for="item in productByCategory " :key="item.id" class="men_fashion">
			 
			<nuxt-link :to="{ path: `/detail/${item.slug}`}">
			<img :src="item.images"></nuxt-link>
			 <div class="price">
				 <span>{{item.name}}</span><br>
			 	 <span class="price__product"> {{item.price}}đ</span>
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
		
		}
	},

	methods:{
		loadData(){
			this.$store.dispatch('productByCategory/productByCategory',this.slug).then((res)=>{
			
			})
		},
	
	},

	mounted(){
		this.loadData()
		console.log(this.productByCategory)

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


}
.men_fashion {
	
	background-color: white;
	 box-shadow: 0 0 0.4rem 0 #0b9471;
	border-radius: .5rem;
	height: 300px;
	width: 200px;
	margin: 20px;
	cursor: pointer;
	
}
.men_fashion img{
	background-color: white;
	width: 90%;
	margin: 10px;
	display: block;
	
}
.price{
	padding: 10px;
}
.price__product{
	color: red;
}



</style>