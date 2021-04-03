import axios from 'axios'

export const state = () => ({
	listProduct:[],
	limit:10,
	page:1
 })

 export const mutations = {
	SET_LISTPRODUCT:(state,data) => state.listProduct = data
  }

  export const actions = {
	listProduct({state,commit}){
		return new Promise((resolve,reject) =>{
			// let data = {
			// 	page:state.page,
			// 	limit:state.limit
			//   }
		
			axios.get('https://api.meiboutiques.work/v1/products')
			.then((res) =>{
				commit('SET_LISTPRODUCT',res.data.data.result)
				
			
				resolve(res)
				
			})
			.catch(error =>{
				reject(error)
			})
		})
	}
  }
  