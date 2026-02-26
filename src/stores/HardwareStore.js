import { defineStore } from "pinia";

export const useHardwareStore = defineStore("hardware", {
  state: () => ({
    hardware: []
  }),
  actions: {
    async loadHardware() {
      const res = await fetch("/data/hardware.json");
      this.hardware = await res.json();
      
    }
  }
});
