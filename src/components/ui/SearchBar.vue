<script setup lang="ts">
const model = defineModel('currentValue')
const emits = defineEmits(['search'])

</script>

<template>
    <div class="searchbar-container">
        <input placeholder="Search" v-model="model" class="searchbar-container_input" type="text">
        <button @click="emits('search', model)" class="searchbar-container_search-button"></button>
    </div>
</template>

<style scoped>
.searchbar-container {
    width: 20dvw;
    height: 36px;
    border-radius: 8px;
    background-color: white;
    padding: 4px;
    position: relative;

    .searchbar-container_input {
        background-color: transparent;
        width: 100%;
        border: none;
        height: 100%;
        outline: none;
        caret-color: black;
        font-size: 18px;
        color: black;
    }

    .searchbar-container_search-button {
        position: absolute;
        right: 4px;
        cursor: pointer;
        background-color: transparent;
        top: 8px;
        width: 10%;
        height: 100%;
        background-image: url('/public/search.svg');
        background-repeat: no-repeat;
        border: none;
    }
}
</style>
