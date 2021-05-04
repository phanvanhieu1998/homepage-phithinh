import axios from 'axios'

export const state = () => ({
    listSearch: [],
    limit: 4,
    page: 1,
    search_text: '',
    totalData: 0

})

export const mutations = {
    SET_SEARCH: (state, data) => state.listSearch = data,
    SET_SEARCH_TEXT: (state, data) => state.search_text = data,
    SET_TOTALDATA: (state, data) => state.totalData = data,
    SET_PAGE: (state, page) => state.page = page,
}

export const getters = {

}

export const actions = {
    listSearch({ state, commit }) {
        return new Promise((resolve, reject) => {

            axios.get(`https://api.phanhieu.tokyo/v1/search?limit=${state.limit}&q=${state.search_text}&page=${state.page}`)
                .then((res) => {
                    commit('SET_SEARCH', res.data.data.result)
                    commit('SET_TOTALDATA', res.data.data.meta.total)

                    resolve(res)

                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}