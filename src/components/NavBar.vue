<script setup>
import { useUserSessionStore } from "../stores/UserSessionStore.js";
import './nav.css'
const user = useUserSessionStore();
</script>

<template>
  <nav>
    <span>TechBuilds</span>
    <span>{{ user.username }}</span>
    <button @click="user.visitGithub()">GitHub</button>
  </nav>
</template>
