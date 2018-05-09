import Vue from "vue";
import Vuex from "vuex";
import cart from './modules/cart';
import viewalive from './modules/viewalive';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart,
    viewalive
  }
});

export default store;
