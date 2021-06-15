import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: []
  },
  mutations: {
    // stateの値を変更する
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    // 第二引数でcommitされた値が入ってくる
    addAddress (state, address) {
      state.addresses.push(address)
    }
  },
  actions: {
    // 自動的にcontextオブジェクトが第一引数に渡って来る
    // 下記の引数はcontext.commitだけ受け取るやり方
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    }
  },
  modules: {
  }
})
