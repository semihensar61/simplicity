export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  LOGIN_USER(state, user) {
    state.authStatus = true;
    state.user = { ...user };
    console.log("USER", state.user)
  },
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
  SET_RESTAURANTS(state, restaurants) {
    state.restaurants = restaurants
  },
  LOGOUT_USER (state) {
    console.log("logout user")
    state.authStatus = ''
    state.token = '' && localStorage.removeItem('apollo-token')
  }
};
