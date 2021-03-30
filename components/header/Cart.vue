<template>
 	<div>
	  	<el-dropdown-menu  style="min-width:320px;padding:20px" slot="dropdown">
			<div  v-for="(item, index) in cart" :key="index" class="product__minicart">
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
import Cookies from 'js-cookie'
export default {
	data(){
		return{

		}
	},
	methods:{
		deleteProduct(item){
			this.$store.dispatch('detail/deleteProduct',item)
		},
	
	},
	mounted(){
		// let cartData = Cookies.get('product')
		// console.log(cartData)
		// cartData = JSON.parse(cartData)
		// console.log(cartData)
		// this.$store.commit('detail/SET_CART_FROM_COOKIE',cartData)
		
	},
	computed:{
	     ...mapState({
          cart: state => state.detail.cart,
		  
        
      }),
	   ...mapGetters({
		
		cartTotalPrice:'detail/cartTotalPrice',
		deleteAll:'detail/deleteAll'
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
</style>