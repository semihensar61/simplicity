export default {
  SET_TOKEN(state, token) {
    console.log("tokends", token);
    state.token = token;
  },
  LOGIN_USER(state, user) {
    state.authStatus = true;
    state.user = { ...user };
  },
};
