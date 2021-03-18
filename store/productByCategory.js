import axios from 'axios'

export const state = () => ({
	productByCategory:[],
	limit:10,
	page:1
 })

 export const mutations = {
	SET_PRODUCTBYCATEGORY:(state,data) => state.productByCategory = data
  }

  export const actions = {
	productByCategory({commit},slug){
		// console.log('---------')
		// console.log(slug)
		// console.log('---------')
		return new Promise((resolve,reject) =>{
		
			axios.get('https://api.meiboutiques.work/v1/categories/'+ slug)
			.then((res) =>{
				commit('SET_PRODUCTBYCATEGORY',res.data.data.result)
				
				resolve(res)
				
			})
			.catch(error =>{
				reject(error)
			})
		})
	}
  }
  