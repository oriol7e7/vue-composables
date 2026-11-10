<script setup>
const emit = defineEmits(['onSearch'])
const search = () => {
    emit('onSearch', inputValue.trim())
}
const inputValue = ref('')
</script>

<template>
    <div class="search">
        <input type="text" v-model="inputValue" placeholder="Cerca una recepta...">
        <button @click="search()">Cerca</button>
    </div>
</template>

<style scoped></style>
