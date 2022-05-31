export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  LOGIN_USER(state, user) {
    state.authStatus = true;
    state.user = { ...user };
  },
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
  SET_RESTAURANTS(state, restaurants) {
    state.restaurants = restaurants
  }
};