<template>
  <div class="card">
    <div class="container">
      <h4><b>{{this.user.firstName}}{{this.user.lastName}}</b></h4>
      <p>{{this.user.email}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "user",
  data() {},
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
