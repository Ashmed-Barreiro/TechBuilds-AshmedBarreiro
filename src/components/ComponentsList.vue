<script setup>
import { HardwareStore } from '@/stores/HardwareStore';

const hardwareStore = HardwareStore


</script>
<template>
    <h1>Components disponibles</h1>
    <ul>
        <li v-for="component in hardwareStore.componentes">
            {{ component.name }}
        </li>
    </ul>
</template>
<style scoped></style>