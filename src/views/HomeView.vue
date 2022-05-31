<template>
  <div class="home">
    <div class="user"><user /></div>
    <div class="tab-bar">
      <button class="tab-button" @click="openTab('Orders')">Orders</button>
      <button class="tab-button" @click="openTab('Restaurants')">
        Restaurants
      </button>
    </div>

    <div id="Orders" class="w3-container tab">
      <h2>Orders</h2>
      <orders />
    </div>

    <div id="Restaurants" class="w3-container tab" style="display: none">
      <h2>Restaurants</h2>
      <restaurants />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import orders from "../components/orders.vue";
import user from "../components/user.vue";
import restaurant from "../components/restaurants.vue";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["restaurants"]),
  },
  components: {
    orders,
    user,
    restaurant,
  },
  mounted() {
    this.$store.dispatch("setRestaurants");
  },
  methods: {
    openTab(tabName) {
      var i;
      var x = document.getElementsByClassName("tab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
    },
  },
};
</script>
<style scoped>
.user {
  text-align: -webkit-center;
  margin-bottom: 50px;
  margin-top: 30px;
}
.tab-button {
  width: 100px;
  color: white;
  font-weight: 700;
  background-color: black;
  height: 50px;
}
.tab-bar{
  justify-content: center;
  text-align: center;
}
</style>
