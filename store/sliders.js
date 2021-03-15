import axios from 'axios'

export const state = () => ({
	listSliders:[],
	limit:10,
	page:1
 })

 export const mutations = {
	SET_LISTSLIDERS:(state,data) => state.listSliders = data
  }

  export const actions = {
	listSliders({state,commit}){
		return new Promise((resolve,reject) =>{
			let data = {
				page:state.page,
				limit:state.limit
			  }
			console.log(data)
			axios.get('https://api.meiboutiques.work/v1/sliders',data)
			.then((res) =>{
				commit('SET_LISTSLIDERS',res.data.data)
				resolve(res)
				
			})
			.catch(error =>{
				reject(error)
			})
		})
	}
  }
  