<template>
  <div class="home">
    <div class="user"><user /></div>
    <orders />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import orders from "../components/orders.vue"
import user from "../components/user.vue"
export default {
  name: "Home",
  computed: {
    ...mapGetters(["restaurants"]),
  },
  components:{
    orders,
    user
  },
  mounted() {
    this.$store.dispatch("setRestaurants")
  }
};
</script>
<style scoped>
.user{
  text-align: -webkit-center;
  margin-bottom: 50px;
  margin-top: 30px;
}
</style>
