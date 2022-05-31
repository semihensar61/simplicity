import { apolloClient } from "@/vue-apollo";
import {
  LOGGED_IN_USER,
  USER_ORDERS,
  RESTAURANT_QUERY,
} from "@/graphql/queries";
import { LOGIN_USER } from "@/graphql/mutations";

export default {
  async login({ commit, dispatch }, authDetails) {
    try {
      const { data } = await apolloClient.mutate({
        mutation: LOGIN_USER,
        variables: { ...authDetails },
      });
      const token = data.loginWithEmail.token;
      commit("SET_TOKEN", token);
      localStorage.setItem("apollo-token", token);
      dispatch("setUser");
    } catch (e) {
      console.log("errorlogin=>", e);
    }
  },
  async setUser({ commit }) {
    try {
      const { data } = await apolloClient.query({ query: LOGGED_IN_USER });
      commit("LOGIN_USER", data.user);
    } catch (e) {}
  },
  async setUserOrders({ commit }, index) {
    try {
      const { data } = await apolloClient.query({
        query: USER_ORDERS,
        variables: { limit: 10, index: index },
      });
      commit("SET_ORDERS", data.pastOrders);
    } catch (e) {}
  },
  async setRestaurants({ commit }) {
    try {
      const { data } = await apolloClient.query({
        query: RESTAURANT_QUERY,
        variables: { limit: 10, index: 0 },
      });
      commit("SET_RESTAURANTS", data.restaurants);
    } catch (e) {}
  },
  async logOut({ commit, dispatch }) {
    try {
      commit("LOGOUT_USER");
    } catch (e) {}
  },
};
