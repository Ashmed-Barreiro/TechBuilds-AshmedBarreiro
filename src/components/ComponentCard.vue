<script setup>
defineProps({ component: Object });
defineEmits(["add"]);
</script>

<template>
  <article class="card">
    <h3>{{ component.name }}</h3>
    <p>{{ component.type }}</p>
    <p>{{ component.price }} €</p>
    <button @click="$emit('add', component)">Afegir</button>
  </article>
</template>
