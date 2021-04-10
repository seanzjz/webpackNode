import { createStore } from 'vuex'

export default createStore({
  state: {
    falg: true, //假设登录状态
    count: 1,
  },
  mutations: {
      countshand(state, n) {
          state.count += n
          console.log(state.count)
      },

  },
  actions: {},
  modules: {
      // menul, //加载vuex 模块化
  }
})