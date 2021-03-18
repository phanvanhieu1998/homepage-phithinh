import axios from 'axios'

export const state = () => ({
	detail:[],
	limit:10,
	page:1
 })

 export const mutations = {
	SET_DETAIL:(state,data) => state.detail = data
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
	}
  }
  