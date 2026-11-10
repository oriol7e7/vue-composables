<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '../composables/useFetch'
import SearchBar from '../components/SearchBar.vue'
import MealCard from '../components/MealCard.vue'

const search = ref('')
const endpoint = computed(() => `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
const { data, error, loading, fetchData } = useFetch(endpoint.value)

const onSearch = (text) => {
    search.value = text
    fetchData()
}
</script>

<template>
    <SearchBar @search="onSearch" />
    <p v-if="loading">Carregant...</p>
    <p v-else-if="error">Error</p>
    <div v-else-if="data?.meals">
        <MealCard v-for="meal in data.meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>