<script setup>
import { useBuildStore } from "../stores/BuildStore";
const build = useBuildStore();
</script>

<template>
  <section>
    <h2>El teu PC</h2>

    <div v-for="(items, type) in build.groupedByType" :key="type">
      <h3>{{ type }}</h3>
      <ul>
        <li v-for="(item, i) in items" :key="i">
          {{ item.name }} - {{ item.price }} €
        </li>
      </ul>
    </div>

    <strong>Total: {{ build.totalPrice }} €</strong>
    <button @click="build.checkout()">Comprar</button>
  </section>
</template>
