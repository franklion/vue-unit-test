<template>
  <div>
    <button @click="fetch">Fetch</button>
    <span v-if="data">
      <ul>
        <li v-for="user in data.users" :key="user.id">
          <p>{{ getShortName(user.name) }}<span>-</span>{{ user.email }}</p>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
import { reactive } from "vue"
import axios from "axios"
import { getShortName } from "@/utils/index.js"

export default {
  name: "Users",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const data = reactive({ users: [] })

    const fetch = () => {
      axios.get(props.url).then(response => {
        data.users = response.data
      })
    }

    return {
      data,
      fetch,
      getShortName
    }
  }
}
</script>
