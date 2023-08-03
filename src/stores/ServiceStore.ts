import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('serviceStore', () => {
  const currentCard = ref(1)


  const setCurrentCard = (value: number) => {
    currentCard.value = value
  }
  return {
    currentCard,
    setCurrentCard
  }
})
