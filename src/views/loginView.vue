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
    ...mapActions(["login"]),
    loginUser() {
      this.login(this.authDetails).then(() => this.$router.push("/dashboard"));
    },
  },
};
</script>
<style scoped>
.app-name {
    font-weight: 900;
    font-size: 3rem;
}
.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.auth h3 {
    margin-top: 2rem;
}
form {
    max-width: 50%;
    margin-top: 1rem;
    padding: 4rem;
    border: 1px solid #c4c4ce;
}
form input {
    display: block;
    margin-bottom: 1.2rem;
    padding: 0.4rem 1.2rem;
    background-color: white;
}
.auth-submit {
    margin-top: .5rem;
    padding: .5rem 1rem;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 0.3rem;
}
.auth-text a {
    color: black;
    text-decoration: none;
}
.auth-text a:visited {
    color: inherit;
}
.auth-text a:hover {
    text-decoration: underline;
}
.auth-text {
    margin-top: .5rem;
}
.auth-button{
    margin: .7rem 2rem 0 0;
    padding: .5rem 2rem;
    background-color: white;
    border: none;
    border-radius: .3rem;
}
main{
    margin-top: 5rem;
    display: flex;
    justify-content: center;
}
</style>
