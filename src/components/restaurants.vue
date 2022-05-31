<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Minumum Order Amount</th>
        <th>Is Open</th>
      </tr>
      <tr v-for="restaurant in this.restaurants" :key="restaurant.uid">
        <td >{{ restaurant.name }}</td>
        <td>{{ restaurant.minOrderAmount }}</td>
        <td>{{ restaurant.open?"open":"closed" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "restaurant",
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    ...mapGetters(["restaurants"]),
  },
  mounted() {
   this.$store.dispatch("setRestaurants", 0);
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  margin-top: 30px;
}
</style>
