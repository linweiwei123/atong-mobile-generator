import Vue from "vue";
import Vuex from "vuex";
import * as TYPES from "./mutation-types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    keepAlives: []
  },
  mutations: {
    [TYPES.INCREMENT] (state) {
      state.count++
    },
    // 添加组件为keepAlive
    [TYPES.ADD_KEEP_ALIVE]: function(state,compName){
      if(state.keepAlives.indexOf(compName)==-1){
        state.keepAlives.push(compName)
      }
    },
    // 组件从keepAlive中移除
    [TYPES.REMOVE_KEEP_ALIVE]: function(state,compName){
       if(state.keepAlives.indexOf(compName)>=0){
          state.keepAlives.splice(compName,1)
       }
    }
  },
  getters: {
    currentKeepAlives: state => {
      return state.keepAlives
    }
  }
});

export default store;
