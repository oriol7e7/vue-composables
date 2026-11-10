<script setup>
const props = defineProps({
    meal: Object
})</script>

<template>
    <img :src="props.meal.image" alt="">
    <strong>{{ props.meal.name }}</strong>
    <RouterLink :to="{ name: 'Meal', params: { id: props.meal.idMeal } }">Veure detall</RouterLink>
</template>

<style scoped></style>
