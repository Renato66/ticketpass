<template>
  <main class="aligner">
    <router-view v-slot="{ Component }">
      <transition  name="slide-left" mode="out-in">
        <component :is="Component"  />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
main {
  background: url(/img/background.jpg);
  background-size: cover;
  height: 100vh;
}

</style>
