<template>
<template>
  <div class="home">
    <main>
      authed
    </main>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  computed: {

  },
    computed: {
    ...mapGetters(['user'])
  }
}
</script>