<script setup>
import { useHardwareStore } from '../stores/HardwareStore';
import ComponentCard from './ComponentCard.vue';

const emit = defineEmits(['add'])
const hardware = useHardwareStore()


</script>
<template>
    <h1>Components disponibles</h1>
    <section>
        <ComponentCard v-for="c in hardware.hardware" :key="c.id || c.name" :component="c" @add="emit('add',$event)"></ComponentCard>
    </section>
</template>
<style scoped></style>