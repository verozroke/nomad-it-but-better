<template>
  <div class="list">
    <TeamItem v-for="member in members" :key="member.id" :name="member.name" :occupation="member.occupation"
      :src="member.src" />
  </div>
</template>

<script setup lang="ts">
import TeamItem from './item/TeamItem.vue'
import { ref } from 'vue'


const members = ref([
  {
    id: 1,
    name: 'Асхат',
    src: '/team-photos/askhat.jpg',
    occupation: 'Full-stack Разработчик',
  },
  {
    id: 2,
    name: 'Владислав',
    src: '/team-photos/vlad.webp',
    occupation: 'Full-stack Разработчик',
  },
  // {
  //   id: 3,
  //   name: 'Сабыржан',
  //   src: '/team-photos/sabyr.jpg',
  //   occupation: 'Full-stack Разработчик',
  // },
  {
    id: 4,
    name: 'Маулен',
    src: '/team-photos/maulen.jpg',
    occupation: 'Frontend Разработчик',
  },
  {
    id: 5,
    name: 'Алим',
    src: '/team-photos/alim.jpg',
    occupation: 'UI/UX Дизайнер',
  },
  {
    id: 6,
    name: 'Ыдырыс',
    src: '/team-photos/idris.jpg',
    occupation: 'Backend Разработчик',
  },
  // {
  //   id: 7,
  //   name: 'Александр',
  //   src: '/team-photos/sanya.jpg',
  //   occupation: 'Frontend Разработчик',
  // },
  {
    id: 8,
    name: 'Дарина',
    src: '/team-photos/darina.jpg',
    occupation: 'Backend Разработчица',
  },
  {
    id: 9,
    name: 'Абай',
    src: '/team-photos/abaz.jpg',
    occupation: 'Сис. Админ',
  }
])

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  width: 100%;
  align-items: center;
}
</style>