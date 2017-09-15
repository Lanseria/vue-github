import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    text: 'javascript',
    loading: true,
    error: null,
    data: null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updatetext (state, text) {
      state.loading = true
      state.text = text
    },
    updatedata (state, data) {
      state.loading = false
      state.data = data.items
      state.err = data
    },
    updateerr (state, err) {
      state.loading = false
      state.err = err
    }
  }
})