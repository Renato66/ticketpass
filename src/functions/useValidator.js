import {ref, computed} from 'vue'

export function useValidator({input, erros, validator}) {
  const state = {
    input: ref(input || ''),
    erros: ref(erros || [])
  }

  const isValid = computed(() => state.erros.value.length === 0)

  function validateErros() {
    state.erros.value = validator(state.input.value)
    return isValid.value
  }

  function clearErros() {
    state.erros.value = []
  }

  return {
    input: state.input,
    erros: state.erros,
    isValid,
    validateErros,
    clearErros
  }
}
