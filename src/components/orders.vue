<template>
  <div>
    <table>
      <tr>
        <th>Order Items</th>
        <th>Restaruant Name</th>
        <th>Order Date</th>
      </tr>
      <tr v-for="order in this.orders" :key="order.uid">
        <td v-for="item in order.items" :key="item.id">{{ item.name }}</td>
        <td>{{ order.restaurant.name }}</td>
        <td>{{ order.orderDate }}</td>
      </tr>
    </table>
    <div class="buttons">
      <button @click="back()">&laquo;</button>page:{{ index + 1
      }}<button @click="next()">&raquo;</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "orders",
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    ...mapGetters(["orders"]),
  },
  mounted() {
    this.$store.dispatch("setUserOrders", 0);
  },
  methods: {
    back() {
      this.$store.dispatch("setUserOrders");
    },
    next() {
      this.index = this.index + 1;
      this.$store.dispatch("setUserOrders", this.index);
    },
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
