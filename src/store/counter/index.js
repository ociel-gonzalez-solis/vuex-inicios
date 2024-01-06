import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
  namespaced: true,
  state,
  mutations, // sincronas siempre
  actions, // siempre asincronas
  getters,
};

export default counterStore;
