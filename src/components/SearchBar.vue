<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const search = () => {
  console.log('==SEARCH BAR COMPONENT DEBUG: ==')
  console.log('INPUT.VALUE.TRIM(): ' + inputValue.value.trim())
  emit('search', inputValue.value.trim())
}
const inputValue = ref('')
</script>

<template>
  <div class="search">
    <input type="text" v-model="inputValue" placeholder="Cerca una recepta..." />
    <button @click="search()">Cerca</button>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}
input {
  flex: 1;
  padding: 8px 12px;
  background: #1f2937;
  color: inherit;
  border: 1px solid #374151;
  border-radius: 6px;
}
button {
  padding: 8px 16px;
  background: #58cf54;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #58cf54cb;
  transition: all 0.3s ease;
}
</style>
