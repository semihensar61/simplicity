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
  props:{
    tableArray:Array
  },
  computed: {
  },
  mounted() {
  }
};
</script>
