<template>
  <t-card class="child-view">
    <h1>Dashboard</h1>
    <h2>
      <router-link class="t-link" :to="{ name: 'Login' }">
        Logout
      </router-link>
    </h2>
  </t-card>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout () {
      this.$router.go({ name: 'Login' })
    }
  }
}
</script>
