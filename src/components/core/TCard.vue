<template>
  <div class="t-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TCard'
}
</script>

<style lang="scss">
.t-card {
  background: white;
  border-radius: 8px;
  padding: 10px 15px;
}
</style>
