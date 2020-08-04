<template>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <div class="t-modal" v-show="modelValue">
        <div
          class="t-modal__backdrop"
          @click="$emit('update:modelValue', false)"
        ></div>
        <transition name="slide-left">
          <div class="t-modal__content">
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.t-modal {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 30px;
  z-index: 99;
  display: grid;
  place-items: center;
  overflow: auto;
  transition: opacity 0.5s;
  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: #04040429;
  }
  &__content {
    margin-bottom: 30px;
    max-width: 90%;
  }
}
</style>
