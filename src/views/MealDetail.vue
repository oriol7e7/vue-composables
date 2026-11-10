<script setup>
import { useRoute } from 'vue-router'
import { watch, computed } from 'vue'
import { useFetch } from '../composables/useFetch'
const route = useRoute()
const endpoint = computed(() => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
const { data, error, loading, fetchData } = useFetch(endpoint.value)
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
    <div v-else-if="data?.meals">
        <h1>{{ data.meals[0].strMeal }}</h1>
        <div class="detail">
            <img :src="data.meals[0].strMealThumb" :alt="data.meals[0].strMeal" />
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
