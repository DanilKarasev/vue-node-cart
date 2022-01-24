import Vue from 'vue';
import Vuex from 'vuex';

const API_URL = 'http://localhost:8080/'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: [],
    filteredGoods: [],
    cart: [],
  },
  getters: {
    goods: (state) => state.filteredGoods,
    cart: (state) => state.cart
  },
  mutations: {
    loadGoods: (state, payload) => {
      state.goods = payload;
      state.filteredGoods = payload;
    },
    loadCart: (state, payload) => {
      state.cart = payload;
    },
    add: (state, payload) => {
      if (state.cart.some(e => e.id_product === payload.id_product)) {
        const index = state.cart.findIndex(e => e.id_product === payload.id_product);
        ++state.cart[index].quantity;
        console.log ( state.cart[ index ].quantity );
      } else {
        state.cart.push(payload);
      }

    },
    remove: (state, payload) => {
      const index = state.cart.findIndex((e) => e.id_product === payload.id_product);

      if (state.cart.some(e => e.id_product === payload.id_product)) {
        if (state.cart[index].quantity > 1) {
          --state.cart[index].quantity;
        } else state.cart.splice(index, 1)
      }
    },
    filter: (state, payload) => {
      state.filteredGoods = payload;
    }
  },
  actions: {
    loadGoods({ commit }){
      fetch(`${API_URL}catalogData`)
        .then((request) => request.json())
        .then((data) => {
          commit('loadGoods', data)
        })
    },
    loadCart({ commit }){
      fetch(`${API_URL}cart`)
        .then((request) => request.json())
        .then((data) => {
          commit('loadCart', data)
        })
    },
    addToCart({ commit }, good){
      fetch(`${API_URL}addToCart`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(good)
      })
        .then(() => {
          commit('add', good)
        })
    },
    removeFromCart({ commit }, good){
      fetch(`${API_URL}removeFromCart`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(good)
      })
        .then(() => {
          commit('remove', good)
        })
    },
    search({ commit, state}, searchString){
      const regex = new RegExp(searchString, 'i');
      commit('filter', state.goods.filter((good) => regex.test(good.product_name)))
    },
  }
});
