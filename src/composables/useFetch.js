import { ref, onMounted } from 'vue'

/**
 * RECEIVES A REF OR A COMPUTED VALUE AND EXECUTES endpoint.value
 */
export function useFetch(endpoint) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  /**
   * Fetches the endpoint of the parameter in the composable handling auxiliar reactive variables
   */
  const fetchData = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(endpoint.value)
      if (!res.ok) {
        error.value = true
        return
      }
      data.value = await res.json()
    } catch (e) {
      error.value = true
    } finally {
      //finalitza sempre el loading state
      loading.value = false
    }
  }

  //Executar funcio quan el component es monti
  onMounted(fetchData)
  return { data, error, loading, fetchData }
}
