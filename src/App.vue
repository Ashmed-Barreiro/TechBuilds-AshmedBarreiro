<script setup>
import { onMounted } from "vue";
import { useHardwareStore } from "./stores/HardwareStore.js";
import { useBuildStore } from "./stores/BuildStore.js";
import NavBar from "./components/NavBar.vue";
import ComponentCard from "./components/ComponentCard.vue";
import CurrentBuildWidget from "./components/CurrentBuildWidget.vue";

const hardwareStore = useHardwareStore();
const buildStore = useBuildStore();

onMounted(() => {
  hardwareStore.loadHardware();
});
</script>

<template>
  <NavBar />

  <section>
    <ComponentCard
      v-for="c in hardwareStore.hardware"
      :key="c.name"
      :component="c"
      @add="buildStore.addComponent"
    />
  </section>

  <CurrentBuildWidget />
</template>
