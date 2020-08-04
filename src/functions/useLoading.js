import {ref} from 'vue'

export function useLoading(loading) {
  const isLoading = ref(loading || false)

  function toggleLoading(value) {
    isLoading.value = value || !isLoading.value
  }

  return {
    isLoading,
    toggleLoading
  }
}
