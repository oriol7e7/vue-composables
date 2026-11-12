<script setup>
import { useRoute } from 'vue-router'
import { watch, computed } from 'vue'
import { useFetch } from '../composables/useFetch'
const route = useRoute()
const endpoint = computed(
  () => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parseInt(route.params.id)}`,
)
const { data, error, loading, fetchData } = useFetch(endpoint)
/**
 * Watch when route.params.id changes, if changes re-execute
 * fetch data function gotten from composable,
 * there it reexecutes data, error, and loading
 */
watch(() => route.params.id, fetchData)
</script>
<template>
  <p v-if="loading">Carregant...</p>
  <p v-else-if="error">Error en carregar la recepta.</p>
  <p v-else-if="!data?.meals">Recepta no trobada</p>
  <div v-else-if="data?.meals">
    <h1>{{ data.meals[0].strMeal }}</h1>
    <div class="detail">
      <img :src="data.meals[0].strMealThumb" :alt="data.meals[0].strMeal" />
      <div>
        <h2>Ingredients:</h2>
        <!--
        for per recorre del 1 al 20, (a the meal db hi han 20 ingredients sempre)
        -->
        <div v-for="i in 20" :key="i">
          <!--
            Comprova que per n'hi hagi un ingredient amb aquest numero
            -->
          <p v-if="data.meals[0][`strIngredient${i}`]?.trim()">
            {{ data.meals[0][`strIngredient${i}`] }}
          </p>
        </div>
      </div>
      <div>
        <h2>Instructions:</h2>
        <p>{{ data.meals[0].strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail {
  display: flex;
  gap: 1rem;
}
</style>
