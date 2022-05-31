export default {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.authStatus,
    user: (state) => state.user,
    restaurants: (state) => state.restaurants,
    orders: (state) => state.orders
}