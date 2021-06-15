import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    // stateの値を変更する
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    // 自動的にcontextオブジェクトが第一引数に渡って来る
    // 下記の引数はcontext.commitだけ受け取るやり方
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    }
  },
  modules: {
  }
})
