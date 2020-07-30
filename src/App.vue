<template>
  <main>
    <transition name="slide-left" mode="out-in" class="child-view">
      <router-view>
      </router-view>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>
