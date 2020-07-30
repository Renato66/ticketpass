<template>
  <div class="t-input">
    <label :for="name" class="t-input__label">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <input
      class="t-input__input"
      :type="type"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :disabled="disabled"
    >
  </div>
</template>

<script>
export default {
  name: 'TInput',
  props: {
    modelValue: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: () => {
        return 'input-' + Math.floor(Math.random() * 100)
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.t-input {
  &__label {
    padding: 0px 0px 8px 0px;
    display: block;
    font-size: 0.9em;
    font-weight: 500;
  }
  &__input {
    padding: 10px 8px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 1.1em;
    border: 1px solid #b6b7b3;
    &[type="password"] {
      color: #636161;
      letter-spacing: 6px;
    }
    &[disabled] {
      background: #eaeaea;
    }
  }
}
</style>
