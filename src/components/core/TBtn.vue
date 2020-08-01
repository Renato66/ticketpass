<template>
  <button class="t-button" :class="{'t-button--loading': loading}" v-bind="$attrs">
    <slot />
    <t-loading v-show="loading" class="t-button__loader"></t-loading>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.t-button {
  position:relative;
  border: 0;
  padding: 11px 2px;
  font-size: 18px;
  border-radius: 6px;
  width: 80%;
  color:white;
  box-shadow: -1px 1px 4px 1px #00000038;
  background: var(--color-primary);
  transition:all .3s ease-in-out;
  opacity:1;
  outline:none;
  cursor:pointer;
  &[disabled] {
    background:linear-gradient(135deg,#cccbcc,#5a5a5e);
    cursor:default;
  }
  &:hover,
  &:focus,
  &[disabled] {
    opacity:.9;
    box-shadow:0px 0px 0px 0px #00000038;
  }
  &--loading {
    opacity:1;
    cursor: progress;
    box-shadow: -1px 1px 4px 1px #00000038;
  }
  &__loader {
    right: 0;
    top: 4px;
  }
}
</style>