<script setup>
import { onMounted } from "vue";
import { useHardwareStore } from "./stores/HardwareStore.js";
import { useBuildStore } from "./stores/BuildStore.js";
import NavBar from "./components/NavBar.vue";
import CurrentBuildWidget from "./components/CurrentBuildWidget.vue";
import './app.css'
import ComponentsList from "./components/ComponentsList.vue";

const hardwareStore = useHardwareStore();
const buildStore = useBuildStore();

onMounted(() => {
  hardwareStore.loadHardware();
});
</script>

<template>
  <NavBar />

  <section>
    <ComponentsList @add="buildStore.addComponent" />
  </section>

  <CurrentBuildWidget />
</template>
