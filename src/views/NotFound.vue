<template>
  <section>
    <h1>Page Not Found</h1>
    <h2>
      Go to
      <router-link :to="{ name: 'Login' }">
        Login
      </router-link>
    </h2>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
