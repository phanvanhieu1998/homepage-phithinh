<template>
 	<div>
	  	<el-dropdown-menu  style="min-width:320px;padding:20px" slot="dropdown">
			 
			  <div class="no_product" v-if="lengthProduct && lengthProduct == 0">
				 
				<div>
					<img style="text-align:center" src="~/static/images/download.png">
				</div>
				 <div>
					 <p style="text-align:center;margin:0"> k có sản phẩm nào</p>
				 </div>
			  </div>
		
			<div v-for="(item, index) in cart" :key="index" class="product__minicart" >
				<div >
					<strong>{{item.product.name}}</strong><br>
					<span> {{item.quantity}} x {{item.product.sale_price}}đ </span>
				</div>
				
				<div>
					 <el-button @click="deleteProduct(item)" size="mini" type="danger">Xóa</el-button>
				</div>
			</div>

			<div class="total__product">
				<div>
					
					<span>total :{{cartTotalPrice}}</span>
				</div>
					 
				<div>
					<nuxt-link to="/cart"><el-button  size="mini" type="primary">Xem Giỏ Hàng</el-button></nuxt-link>
				</div>
			</div>

		</el-dropdown-menu>
	</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
	data(){
		return{
		
		}
	},
	methods:{
		deleteProduct(item){
			this.$store.dispatch('detail/deleteProduct',item)
		},
		// local(){
		//  localStorage.getItem('cart')

		//   this.$store.commit('detail/SET_CART_FROM_LOCAL',JSON.parse(localStorage.getItem('cart')))
		// }
	},
	mounted(){
		// this.local()
	
	},
	computed:{
	     ...mapState({
          cart: state => state.detail.cart,
		  
		  
        
      }),

	
	   ...mapGetters({
		
		cartTotalPrice:'detail/cartTotalPrice',
		deleteAll:'detail/deleteAll',
		 lengthProduct: 'detail/lengthProduct',
	  })
	},
	// 	watch: {
	// 	cart(newVal, oldVal){
	// 		console.log(newVal, oldVal)
			 
	// 	},

	// },

}
</script>

<style>
.product__minicart{
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;

}
.total__product{
	display: flex;
	justify-content: space-between;
	border-top:1px solid #999 ;
	padding: 10px 0;
}
.no_product img{
 margin-left: 100px;
 
	
}
</style>