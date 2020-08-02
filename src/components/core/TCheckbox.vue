<template>
  <div class="t-checkbox">
    <input
      :checked="modelValue"
      class="t-checkbox__input"
      :class="{'t-checkbox__input--error': erros.length > 0}"
      type="checkbox"
      :name="name"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <label for="vehicle1">
      <slot />
    </label>
  </div>
</template>

<script>
import inputPropsMixin from '../mixins/inputPropsMixin'

export default {
  inheritAttrs: false,
  props: {
    ...inputPropsMixin,
    modelValue: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.t-checkbox {
  display: flex;
  align-items: center;
  &__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance:none;
    display: inline-block;
    height: 14px;
    width: 14px;
    margin: 0px 6px 0px 2px;
    border-radius: 3px;
    border: 1px solid #b6b7b3;
    outline: none;
    color: white;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    cursor: pointer;
    &:checked {
      background: var(--color-primary);
      border-color: var(--color-primary)!important;
      &::before {
        display: block;
        position: relative;
        content: " ";
        left: 4px;
        top: 1px;
        width: 3px;
        height: 6px;
        border: solid white;
        border-width: 0 1px 1px 0;
        transform: rotate(35deg);
      }
    }
  }
}
</style>