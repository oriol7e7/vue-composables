<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <h1>Les receptes de l'oriol</h1>
    <RouterLink to="/">Inici</RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

a {
  color: white;
}
</style>
