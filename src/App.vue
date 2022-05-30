<template>
  <header class="header">
    <div class="app-name">Blogr</div>
    <div v-if="authStatus" id="nav">
      <div>{{ user.name }}</div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: "app",
  data() {
    return {

    };
  },
  computed: {
     ...mapGetters(["authStatus"]),
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
