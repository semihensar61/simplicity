import Vue from "vue";
import Vuex from "vuex";

import { apolloClient } from "@/vue-apollo";
import { LOGGED_IN_USER, USER_ORDERS, RESTAURANT_QUERY } from "@/graphql/queries";
import { LOGIN_USER} from "@/graphql/mutations";

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
      console.log("tokends", token)
      state.token = token;
    },
    LOGIN_USER(state, user) {
      state.authStatus = true;
      state.user = { ...user };
    },
  },
  actions: {
    async login({ commit, dispatch }, authDetails) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: LOGIN_USER,
          variables: { ...authDetails },
        });
        const token =data.loginWithEmail.token;
        commit("SET_TOKEN", token);
        localStorage.setItem("apollo-token", token);
        dispatch("setUser");
      } catch (e) {
        console.log("errorlogin=>", e);
      }
    },
    async setUser({ commit }) {
      const { data } = await apolloClient.query({ query: LOGGED_IN_USER });
      console.log("USER==>", data)
      commit("LOGIN_USER", data.user);
    },
    async setUserOrders({commit}) {
      console.log("asdads")
      const {data} = await apolloClient.query({query: USER_ORDERS, variables:{limit:10, index:0}}
      );
      console.log(data)
    },
    async setRestaurants({commit}) {
      console.log("asdads")
      const {data} = await apolloClient.query({query: RESTAURANT_QUERY, variables:{limit:10, index:0}}
      );
      console.log(data)
    }
  },
  modules: {},
});
