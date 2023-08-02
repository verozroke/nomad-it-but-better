<template>
  <div class="slogans">
    <ServicesSlogan v-for="slogan in slogans" :key="slogan.id" :slogan-name="slogan.name" />
    <div class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
        <path d="M30 18L0 35.3205L0 0.679491L30 18Z" fill="#0014FF" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServicesSlogan from './ServicesSlogan.vue'
import { computed } from 'vue';
import { useServiceStore } from '@/stores/ServiceStore';


const serviceStore = useServiceStore()


const arrowPosition = computed(() => {
  switch (serviceStore.currentCard) {
    case 1:
      return '30px'
    case 2:
      return '175px'
    case 3:
      return '325px'
  }
})

const slogans = ref([
  {
    id: 1,
    name: 'DEV'
  },
  {
    id: 2,
    name: 'UI/UX'
  },
  {
    id: 3,
    name: 'SMM'
  },
])
</script>

<style lang="scss" scoped>
.slogans {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 389px;
}

.arrow {
  width: 40px;
  height: 40px;
  position: absolute;
  top: v-bind(arrowPosition);
  left: -60px;
  transition: .4s;
}
</style>