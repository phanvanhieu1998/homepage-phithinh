import axios from 'axios'

export const state = () => ({
	listSearch:[],
	limit:10,
	page:1,
	search_text:''

 })

 export const mutations = {
	SET_SEARCH:(state,data) => state.listSearch = data,
	// SET_SEARCH_TEXT:(state,data) => state.search_text = data
  }

  export const getters = {
	  
  }

  export const actions = {
	listSearch({state,commit},data){
		return new Promise((resolve,reject) =>{
			// let data = {
			// 	page:state.page,
			// 	limit:state.limit
			//   }
			// if(state.search_text){
			// 	let a = state.search_text
			// }
		
			
			axios.get(`https://api.meiboutiques.work/v1/search?limit=${data.limit}&q=${data.q}` )
			.then((res) =>{
				commit('SET_SEARCH',res.data.data.result) 
				
			
				resolve(res)
				
			})
			.catch(error =>{
				reject(error)
			})
		})
	}
  }
  