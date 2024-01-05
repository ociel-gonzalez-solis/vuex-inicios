import getRandomInt from "@/helpers/getRandom";
import { createStore } from "vuex";

export default createStore({
  state: {
    count       : 1,
    lastMutation: null,
    isLoading   : false,
  },
    // sincronas siempre
  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "Increment";
    },
    incrementBy(state, val) {
      state.count        += val;
      state.lastMutation  = "IncrementBy";
    },
    setIsLadoing(state, val) {
      state.isLoading = val;
    },
  },
    // siempre asincronas
  actions: {
    async incrementRandomInt({ commit }) {
      commit("setIsLadoing", true);
      const randomInt = await getRandomInt();
      commit("incrementBy", randomInt);
      commit("setIsLadoing", false);
    },
  },
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
});
