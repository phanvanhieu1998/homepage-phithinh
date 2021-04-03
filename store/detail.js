import axios from 'axios'




// import { getCartCookie } from '@/utils/cookie'
export const state = () => ({
	detail:[],
	limit:10,
	page:1,
	cart: [],

 })



 export const getters = {
	lengthProduct : state =>{
		return state.cart.length
		
	},

	cartTotalPrice : state =>{
		let total = 0;
		state.cart.forEach(item =>{
			total += item.product.sale_price * item.quantity
		})
		return total
	}
 }
 export const mutations = {
	SET_DETAIL:(state,data) => state.detail = data,
	ADD_TO_CART:(state,{product,quantity,colors,sizes}) =>{
		let productInCart = state.cart.find(item =>{
			return item.product.id === product.id && item.colors === colors && item.sizes === sizes
		})
		
		if(productInCart){
			productInCart.quantity +=quantity
			return
		}
		state.cart.push({
			product,
			quantity,
			colors,
			sizes
		}) 
		let cart =JSON.stringify(state.cart)
		localStorage.setItem('cart',cart)
		console.log('qqqqqq')
		console.log(cart)
		console.log('qqqqqq')
		
	},
	  SET_CART_FROM_LOCAL:(state,data) =>{
	  	state.cart = data
	 },

	SET_DELETEPRODUCT:(state,id) =>{
		let index = state.cart.findIndex(item => item.product.id === id)
		state.cart.splice(index,1)
		
	},




  }

  export const actions = {
	detail({commit},slug){
		// console.log('---------')
		// console.log(slug)
		// console.log('---------')
		return new Promise((resolve,reject) =>{
		
			axios.get('https://api.meiboutiques.work/v1/products/'+ slug)
			.then((res) =>{
				commit('SET_DETAIL',res.data.data)
				
				resolve(res.data.data)
				
			})
			.catch(error =>{
				reject(error)
			})
		})
	},
	addToCart({commit},{product,quantity,colors,sizes}){

	
		commit('ADD_TO_CART',{product,quantity,colors,sizes})
		// let x = JSON.stringify({product,quantity,colors,sizes})
		// localStorage.setItem('product',x)
	
	},
	deleteProduct({commit},item){
		
		commit('SET_DELETEPRODUCT',item.product.id)
		
	},


  }
  