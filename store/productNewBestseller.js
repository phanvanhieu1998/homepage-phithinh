import axios from 'axios'

export const state = () => ({
    productNew: [],
    productBestseller: [],
    limit: 10,
    page: 1
})

export const mutations = {
    SET_PRODUCT_NEW: (state, data) => state.productNew = data,
    SET_PRODUCT_BESTSELLER: (state, data) => state.productBestseller = data
}

export const actions = {
    productNew({ state, commit }) {
        return new Promise((resolve, reject) => {
            // let data = {
            // 	page:state.page,
            // 	limit:state.limit
            //   }

            axios.get('https://api.phanhieu.tokyo/v1/newest-bestsellers')
                .then((res) => {
                    commit('SET_PRODUCT_NEW', res.data.data.newest)


                    resolve(res)

                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    producBestseller({ state, commit }) {
        return new Promise((resolve, reject) => {
            // let data = {
            // 	page:state.page,
            // 	limit:state.limit
            //   }

            axios.get('https://api.meiboutiques.work/v1/newest-bestsellers')
                .then((res) => {
                    commit('SET_PRODUCT_BESTSELLER', res.data.data.bestsellers)


                    resolve(res)

                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}