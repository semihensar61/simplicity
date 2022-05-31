<template>
  <div class="home">
    <main>authed</main>
    <orders />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import orders from "../components/orders.vue"
export default {
  name: "Home",
  computed: {
    ...mapGetters(["user", "restaurants"]),
  },
  components:{
    orders
  },
  mounted() {
    this.$store.dispatch("setRestaurants")
  }
};
</script>
