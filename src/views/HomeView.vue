<template>
  <div class="home">
    <main>authed</main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.$store.dispatch("setUserOrders")
    this.$store.dispatch("setRestaurants")
  }
};
</script>
