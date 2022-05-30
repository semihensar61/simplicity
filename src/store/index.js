import Vue from "vue";
import Vuex from "vuex";

import { apolloClient } from "@/vue-apollo";
import { LOGGED_IN_USER } from "@/graphql/queries";
import { LOGIN_USER, REGISTER_USER } from "@/graphql/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: {},
    authStatus: false,
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.authStatus,
    user: (state) => state.user,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGIN_USER(state, user) {
      state.authStatus = true;
      state.user = { ...user };
    },
  },
  actions: {},
  modules: {},
});
