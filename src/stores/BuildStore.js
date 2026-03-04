// src/stores/build.js
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

// Agrupa "iguales" (mismo id si existe; si no, mismo name; si no, JSON)
function makeItemKey(item) {
  if (item?.id != null) return `id:${item.id}`;
  if (item?.name) return `name:${item.name}`;
  return `obj:${JSON.stringify(item)}`;
}

export const useBuildStore = defineStore("build", () => {
  // state
  const components = ref(JSON.parse(localStorage.getItem("build") || "[]"));

  // getters
  const totalPrice = computed(() =>
    components.value.reduce((sum, c) => sum + (Number(c.price) || 0), 0)
  );

  // 2) agrupación por "elemento igual" (mismo producto/componente)
  // Devuelve un array de grupos con cantidad y subtotal para UI fácil
  const groupedByItem = computed(() => {
    const map = new Map();

    for (const c of components.value) {
      const key = makeItemKey(c);
      if (!map.has(key)) {
        map.set(key, { key, item: c, qty: 0, items: [], subtotal: 0 });
      }
      const g = map.get(key);
      g.qty += 1;
      g.items.push(c);
      g.subtotal += Number(c.price) || 0;
    }

    return Array.from(map.values());
  }); 

  // Persistencia
  function save() {
    localStorage.setItem("build", JSON.stringify(components.value));
  }

  watch(components, save, { deep: true });

  // actions
  function addComponent(component) {
    components.value.push({ ...component });
  }

  function removeComponent(index) {
    components.value.splice(index, 1);
  }

  // Si quieres eliminar una sola unidad por "item igual"
  function removeOneByItem(component) {
    const key = makeItemKey(component);
    const idx = components.value.findIndex((c) => makeItemKey(c) === key);
    if (idx !== -1) components.value.splice(idx, 1); 
  }

  function clear() {
    components.value = [];
  }

  function checkout() {
    alert(`Compra finalitzada: ${totalPrice.value}€`);
    clear();
  }

  return {
    components,
    totalPrice,
    groupedByItem,
    addComponent,
    removeComponent,
    removeOneByItem,
    checkout,
    clear,
    save,
  };
});