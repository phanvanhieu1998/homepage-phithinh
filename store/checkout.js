import axios from 'axios'

export const state = () => ({

})

export const mutations = {

}

export const actions = {
    checkout({ state, commit }, data) {
        console.log(data)
        return new Promise((resolve, reject) => {

            axios.post('https://api.phanhieu.tokyo/v1/orders/checkout', data)
                .then((res) => {
                    console.log('---')
                    console.log(res)
                    resolve(res)

                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}