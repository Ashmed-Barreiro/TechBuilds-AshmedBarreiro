<script setup>


</script>
<template>
<header>
    <nav>
        <h1>TechBuilds</h1>
        <p>{{ nomUser }}</p>
        <button>cart{{ numComponents }}</button>
    </nav>
</header>
</template>
<style scoped>
    nav{
        display: flex;
        width: 100%;
        justify-content:space-between;
    }

</style>