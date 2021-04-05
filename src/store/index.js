import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    distance: "",
    fuel: "",
    cost: "",
  },
  getters: {
    getDistance (state) {
      return state.distance;
    },
    getFuel (state) {
      return state.fuel;
    },
    getCost (state) {
      return state.cost;
    }
  },

  mutations: {

  },
  actions: {
  },
  modules: {}
});
