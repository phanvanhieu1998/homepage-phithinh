import axios from 'axios'

export const state = () => ({
    detail: [],
    limit: 10,
    page: 1,
    cart: [],

})



export const getters = {
    lengthProduct: state => {

        return state.cart.length


    },

    cartTotalPrice: state => {

        let total = 0;
        state.cart.forEach(item => {
            total += item.product.sale_price * item.quantity
        })
        return total

    }
}
export const mutations = {
    SET_DETAIL: (state, data) => state.detail = data,
    SET_QUANTITY: (state, data) => {
        let changeQuantity = state.cart.find(item => {
            return item.product.id === data.id && item.product.sizes === data.sizes && item.product.colors === data.colors
        })
        if (changeQuantity) {
            changeQuantity.quantity = data.quantity
        }

        let cart = JSON.stringify(state.cart)
        localStorage.setItem('cart', cart)
    },
    ADD_TO_CART: (state, { product, quantity, colors, sizes }) => {

        let productInCart = state.cart.find(item => {
            return item.product.id === product.id && item.colors === colors && item.sizes === sizes
        })

        if (productInCart) {
            productInCart.quantity += quantity

        } else {
            state.cart.push({
                product,
                quantity,
                colors,
                sizes
            })
        }

        let cart = JSON.stringify(state.cart)
        localStorage.setItem('cart', cart)



    },
    SET_CART_FROM_LOCAL: (state, data) => {
        state.cart = data
    },

    SET_DELETEPRODUCT: (state, id) => {
        let index = state.cart.findIndex(item => item.product.id === id)
        state.cart.splice(index, 1)

        let cart = JSON.stringify(state.cart)
        localStorage.setItem('cart', cart)
    },
    SET_DELETE_CHECKOUT: (state) => {
        state.cart = []
        let cart = JSON.stringify(state.cart)
        localStorage.setItem('cart', cart)
    }





}

export const actions = {
    detail({ commit }, slug) {
        // console.log('---------')
        // console.log(slug)
        // console.log('---------')
        return new Promise((resolve, reject) => {

            axios.get('https://api.phanhieu.tokyo/v1/products/' + slug)
                .then((res) => {
                    commit('SET_DETAIL', res.data.data)

                    resolve(res.data.data)

                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    addToCart({ commit }, { product, quantity, colors, sizes }) {


        commit('ADD_TO_CART', { product, quantity, colors, sizes })
            // let x = JSON.stringify({product,quantity,colors,sizes})
            // localStorage.setItem('product',x)

    },
    deleteProduct({ commit }, item) {


        commit('SET_DELETEPRODUCT', item.product.id)

    },


}