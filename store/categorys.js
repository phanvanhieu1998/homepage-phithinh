import axios from 'axios'

export const state = () => ({
	listCategory:[],
	limit:10,
	page:1
 })

 export const mutations = {
	SET_LISTCATEGORY:(state,data) => state.listCategory = data
  }

  export const actions = {
	listCategory({state,commit}){
		return new Promise((resolve,reject) =>{
			let data = {
				page:state.page,
				limit:state.limit
			  }
		
			axios.get('https://api.meiboutiques.work/v1/categories',data)
			.then((res) =>{
				commit('SET_LISTCATEGORY',res.data.data)
			
				resolve(res)
				
			})
			.catch(error =>{
				reject(error)
			})
		})
	}
  }
  