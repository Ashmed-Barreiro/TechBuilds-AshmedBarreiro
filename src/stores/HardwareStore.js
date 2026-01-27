import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const HardwareStore = defineStore('hardwareStore',() =>{
    const components = ref([])

    //Actions
    loadHardware(){

        components = fetch('./public/data/hardware.json')
        
    }




})