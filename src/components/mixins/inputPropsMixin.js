// BUG: https://github.com/vuejs/vue-web-component-wrapper/issues/30

export default {
  label: {
    type: String
  },
  name: {
    type: String,
    default: () => {
      return 'input-' + Math.floor(Math.random() * 100)
    }
  },
  erros: {
    type: Array,
    default: () => {
      return []
    }
  }
}
