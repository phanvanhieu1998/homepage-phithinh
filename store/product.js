import axios from 'axios'

export const state = () => ({
    listProduct: [],


    totalData: 0,
    limit: 8,
    page: 1,

})

export const mutations = {
    SET_LISTPRODUCT: (state, data) => state.listProduct = data,
    SET_TOTALDATA: (state, data) => state.totalData = data,
    SET_PAGE: (state, page) => state.page = page,

}

export const getters = {

}

export const actions = {
    listProduct({ state, commit }) {
        return new Promise((resolve, reject) => {

            let page1 = {
                page: state.page,
                limit: state.limit
            }

            axios.get(`https://api.phanhieu.tokyo/v1/products?page=${page1.page}&limit=${page1.limit}`)
                .then((res) => {
                    commit('SET_LISTPRODUCT', res.data.data.result)

                    commit('SET_TOTALDATA', res.data.data.meta.total)
                    resolve(res)

                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}