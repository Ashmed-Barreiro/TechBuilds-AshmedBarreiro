import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useBuildStore = defineStore("build", {
  state: () => ({
    components: JSON.parse(localStorage.getItem("build")) || []
  }),
  getters: {
    totalPrice: (state) =>
      state.components.reduce((sum, c) => sum + c.price, 0),

    groupedByType: (state) =>
      groupBy(state.components, "type")
  },
  actions: {
    save() {
      localStorage.setItem("build", JSON.stringify(this.components));
    },
    addComponent(component) {
      this.components.push(component);
      this.save();
    },
    removeComponent(index) {
      this.components.splice(index, 1);
      this.save();
    },
    checkout() {
      alert(`Compra finalitzada: ${this.totalPrice}€`);
      this.components = [];
      this.save();
    }
  }
  
});

