import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
      openid:""
  },
  mutations: {
    SetOpenID (state) {
      state.openid++;
    },
    // decrement (state) {
    //   state.counter--;
    // }
  },
  actions: {
    setOpenID ({ commit }) {
      commit('SetOpenID');
    },
    // decrement ({ commit }) {
    //   commit('decrement');
    // },
    // incrementAsync ({ commit }) {
    //   setTimeout(() => {
    //     commit('increment');
    //   }, 1000);
    // }
  }
});
