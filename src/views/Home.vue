<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '../composables/useFetch'
import SearchBar from '../components/SearchBar.vue'
import MealCard from '../components/MealCard.vue'

const search = ref('')
const endpoint = computed(() => {
  return search.value
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    : 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'
})

const { data, error, loading, fetchData } = useFetch(endpoint)

const onSearch = (text) => {
  search.value = text
  console.log('==HOMEVIEW DEBUG==')
  console.log('TEXT DETECTED FROM EMIT: ' + text)
  fetchData()
}
</script>

<template>
  <SearchBar @search="onSearch" />
  <p v-if="loading">Carregant...</p>
  <div v-else-if="error" class="error">
    <h2>Error</h2>
    <p>No s'han pogut carregar les receptes</p>
    <button @click="fetchData">Torna a provar</button>
  </div>
  <div v-else-if="!data?.meals?.length">
    <h2>No s'han trobat receptes per: {{ search }}</h2>
  </div>
  <div v-else-if="data?.meals" class="meals">
    <MealCard v-for="meal in data.meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<style scoped>
.meals {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.error {
  text-align: center;
  color: #f87171;
}
button {
  padding: 8px 16px;
  background: #374151;
  color: inherit;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #4b5563;
}
</style>
