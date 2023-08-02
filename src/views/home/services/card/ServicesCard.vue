<template>
  <div class="card">
    <ServicesItem v-for="item in items" :key="item.id" :card-number="item.id" :service-name="item.key"
      :imgSrc="item.imgSrc" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServicesItem from './item/ServicesItem.vue'

const items = ref([
  {
    id: 1,
    key: 'DEV',
    imgSrc: 'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
  },
  {
    id: 2,
    key: 'DESIGN',
    imgSrc: 'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
  },
  {
    id: 3,
    key: 'SMM',
    imgSrc: 'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
  },
])


</script>

<style lang="scss" scoped>
.card {
  padding: 36px 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-radius: 30px;
  background: linear-gradient(139deg, rgba(183, 183, 183, 0.20) 0%, rgba(129, 129, 129, 0.20) 100%);
  backdrop-filter: blur(7.5px);
}
</style>