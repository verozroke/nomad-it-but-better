import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {
  const isMobile = ref(false)
  const burger = ref(false)


  return {
    isMobile,
    burger
  }
})
