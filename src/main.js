// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    show: false 
  },
  mutations: {
    toggle (state, payload) {
      state.show = !state.show;
    }
  }
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
