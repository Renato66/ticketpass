<template>
  <t-card class="child-view">
    <h1>Welcome, {{ firsName }}</h1>
    <div class="text-center">
      <a class="t-link" @click="logoutUser">
        Logout
      </a>
    </div>
  </t-card>
</template>

<script>
import {logout, getUser} from '../service/auth.js'

export default {
  name: 'Dashboard',
  data() {
    return {
      firsName: ''
    }
  },
  methods: {
    logoutUser() {
      this.$router.push({name: 'Login'})
      logout()
    }
  },
  mounted() {
    const user = getUser()
    if (user) {
      this.firsName = user.name.split(' ')[0]
    }
  }
}
</script>
