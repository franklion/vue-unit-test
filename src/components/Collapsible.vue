<template>
  <div>
    <button @click="handleClick">Click me</button>
    <div v-show="displayElement">
      <p>Text</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Collapsible",
  setup() {
    const displayElement = ref(false)

    const handleClick = () => {
      displayElement.value = !displayElement.value
    }

    return {
      displayElement,
      handleClick
    }
  }
}
</script>
