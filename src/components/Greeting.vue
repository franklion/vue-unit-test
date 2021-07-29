<template>
  <div>
    <button @click="fetch">Fetch</button>
    <span v-if="data">
      {{ data.greeting }}
    </span>
  </div>
</template>

<script>
import { ref } from "vue"
import axios from "axios"

export default {
  name: "Greeting",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const data = ref("")

    const fetch = () => {
      axios.get(props.url).then(response => {
        data.value = response.data
      })
    }

    return {
      data,
      fetch
    }
  }
}
</script>
