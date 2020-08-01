<template>
  <div class="t-input">
    <label :for="name" class="t-input__label">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <input
      class="t-input__input"
      :class="{'t-input__input--error': erros.length > 0}"
      :type="type"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
    <div class="t-helper" v-if="erros.length > 0">
      ?
      <ul class="t-helper__message">
        <li v-for="(message, index) in erros" :key="index">
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String
    },
    label: {
      type: String
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
    erros: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.t-input {
  position: relative;
  &__label {
    padding: 0px 0px 8px 0px;
    display: block;
    font-size: 0.9em;
    font-weight: 500;
  }
  &__input {
    width: calc(100% - 16px);
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
    &--error {
      border: 1px solid red;
    }
  }
}
.t-helper {
  position: absolute;
  right: 1px;
  bottom: 3px;
  height: 16px;
  width: 16px;
  font-size: 12px;
  background: #b6b7b369;
  border-radius: 100%;
  text-align: center;
  color: #7b7b7b;
  cursor: help;
  &__message{
    display: none;
    position: absolute;
    left: -150px;
    right: 0;
    max-width: 150px;
    background: #000000ba;
    border-radius: 8px;
    z-index: 1;
    color: white;
    padding: 8px 10px;
    margin-top: 6px;
    font-size: 14px;
    :hover > & {
      display: block
    }
  }
}
</style>
