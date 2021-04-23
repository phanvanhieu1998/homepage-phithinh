import axios from 'axios'

export const state = () => ({
	listSearch:[],
	limit:4,
	page:1,
	search_text:''

 })

 export const mutations = {
	SET_SEARCH:(state,data) => state.listSearch = data,
	 SET_SEARCH_TEXT:(state,data) => state.search_text = data,
	 SET_TOTALDATA:(state,data) => state.totalData = data,
	 SET_PAGE:(state, page) => state.page = page,
  }

  export const getters = {
	  
  }

  export const actions = {
	listSearch({state,commit},data){
		return new Promise((resolve,reject) =>{
			let data1 = {
				page:state.page,
				limit:state.limit
			}
				
		
			
			axios.get(`https://api.meiboutiques.work/v1/search?limit=${data1.limit}&q=${data.q}&page=${data1.page}` )
			.then((res) =>{
				commit('SET_SEARCH',res.data.data.result) 
				commit('SET_TOTALDATA',res.data.data.meta.total)
			
				resolve(res)
				
			})
			.catch(error =>{
				reject(error)
			})
		})
	}
  }
  