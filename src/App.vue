<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />

  <hr />

  <Count />

  <hr />

  <VModel />

  <hr />

  <Greeting url="/greet" />

  <hr />

  <Users url="https://jsonplaceholder.typicode.com/users" />

  <hr />

  <Select />

  <hr />

  <Collapsible />
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue"
import Greeting from "@/components/Greeting.vue"
import Count from "@/components/Count.vue"
import VModel from "@/components/VModel.vue"
import Users from "@/components/Users.vue"
import Select from "@/components/Select.vue"
import Collapsible from "@/components/Collapsible.vue"

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
