import axios from 'axios'

export const state = () => ({
    // listProduct:[],
    // limit:10,
    // page:1
})

export const mutations = {
    // SET_LISTPRODUCT:(state,data) => state.listProduct = data
}

export const actions = {
    handleProblem({ state, commit }, data) {
        return new Promise((resolve, reject) => {
            // let data = {
            // 	page:state.page,
            // 	limit:state.limit
            //   }

            axios.post('https://api.phanhieu.tokyo/v1/contacts', data)
                .then((res) => {
                    commit

                    resolve(res)

                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}