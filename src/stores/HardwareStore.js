// src/stores/hardware.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHardwareStore = defineStore('hardware', () => {
  // state
  const hardware = ref([])

  // actions
  async function loadHardware() {
    try {
      const res = await fetch('/data/hardware.json')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      hardware.value = await res.json()
    } catch (err) {
      console.error('Error loading hardware:', err)
      hardware.value = []
    }
  }

  return {
    hardware,
    loadHardware,
  }
})
