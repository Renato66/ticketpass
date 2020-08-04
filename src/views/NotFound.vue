<template>
  <t-card class="child-view">
    <h1>Page Not Found</h1>
    <h2>
      Go to
      <router-link :to="{name: 'Login'}">
        Login
      </router-link>
    </h2>
  </t-card>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
