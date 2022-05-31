<template>
  <div class="home">
    <main>authed</main>
    <div>{{this.orders}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["user", "orders", "restaurants"]),
  },
  mounted() {
    this.$store.dispatch("setUserOrders")
    this.$store.dispatch("setRestaurants")
  }
};
</script>
