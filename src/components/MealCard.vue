<script setup>
const props = defineProps({
  meal: Object,
})
</script>

<template>
  <div class="card">
    <img :src="props.meal.strMealThumb" alt="" />
    <strong>{{ props.meal.strMeal }}</strong>
    <!--
    Show category only if api responds with it
    In searchs only, not in the initial load
    -->
    <p v-if="props.meal.strCategory" class="category">{{ props.meal.strCategory }}</p>
    <RouterLink :to="{ name: 'Meal', params: { id: props.meal.idMeal } }">Veure detall</RouterLink>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0px;
  background: #1f2937;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.card:hover {
  background: #8aca7a1e;
  transform: translateY(-3px);
}
img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}
strong {
  font-weight: 600;
  text-align: center;
}
p {
  color: white;
}
a {
  color: #58cf54;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
