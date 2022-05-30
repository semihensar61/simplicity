<template>
  <div class="auth">
    <h3>Log In</h3>
    <form action="POST" @submit.prevent="loginUser">
      <label for="email">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="asd@email.com"
        v-model="authDetails.e"
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="password"
        v-model="authDetails.p"
      />
      <button class="auth-submit">Login</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      authDetails: {
        e: "",
        p: "",
      },
    };
  },
  methods: {
    loginUser: function () {},
  },
};
</script>
