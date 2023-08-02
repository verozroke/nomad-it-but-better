<template>
  <div class="card">
    <ServicesItem :page-name="item.pageName" v-for="item in items" :key="item.id" :card-number="item.id"
      :service-name="item.key" :imgSrc="item.imgSrc" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServicesItem from './item/ServicesItem.vue'

const items = ref([
  {
    id: 1,
    key: 'DEV',
    imgSrc: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    pageName: 'CasesDev'
  },
  {
    id: 2,
    key: 'DESIGN',
    imgSrc: '/card2.jpg',
    pageName: 'CasesDesign'

  },
  {
    id: 3,
    key: 'SMM',
    imgSrc: 'https://hsbi.hse.ru/upload/career/professions/2018/smm-1.png',
    pageName: 'CasesDesign'

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