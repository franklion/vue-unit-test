<template>
  <h1>{{ msg }}</h1>

  <h2>Hey! Frank</h2>

  <p class="desc" data-testid="desc">
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.desc {
  font-size: 28px;
}

a {
  color: #42b983;
}
</style>
