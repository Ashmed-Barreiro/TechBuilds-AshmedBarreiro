<script setup>
import { useBuildStore } from "../stores/BuildStore";
import "./cart.css";

const build = useBuildStore();
</script>

<template>
  <section>
    <h2>El teu PC</h2>

    <p v-if="build.groupedByItem.length === 0">No tens components al carret.</p>

    <ul v-else class="cart-list">
      <li v-for="g in build.groupedByItem" :key="g.key" class="cart-item">
        
        <div class="cart-main">
          <strong>{{ g.item.name }}</strong>
          <small v-if="g.item.type">({{ g.item.type }})</small>
        </div>

        <div class="cart-meta">
          <span>{{ g.item.price }} €</span>
          <span>x{{ g.qty }}</span>
          <strong>{{ g.subtotal }} €</strong>

          <!-- Quitar o poner 1 unidad -->
          <button type="button" @click="build.removeOneByItem(g.item)">-</button>
          <button type="button" @click="build.addComponent(g.item)">+</button>
        </div>
        </li>
      
    </ul>

    <div class="cart-footer">
      <strong>Total: {{ build.totalPrice }} €</strong>
      <button type="button" @click="build.checkout()" :disabled="build.totalPrice === 0">
        Comprar
      </button>
    </div>
  </section>
</template>