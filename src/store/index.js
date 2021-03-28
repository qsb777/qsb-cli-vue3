import {
  createStore
} from 'vuex'

const store = createStore({
  state: {
    loading: false
  },
  mutations: {
    // 是否显示全局Loading
    loadingControl(state, e) {
      state.loading = e
    },
  },
  actions: {},
  modules: {}
})

export default store