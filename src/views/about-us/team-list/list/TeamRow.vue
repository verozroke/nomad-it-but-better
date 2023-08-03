<template>
  <div class="list">
    <TeamItem v-for="member in members" :key="member.id" :name="member.name" :occupation="member.occupation" />
  </div>
</template>

<script setup lang="ts">
import TeamItem from './item/TeamItem.vue'
import { ref } from 'vue'


const members = ref([
  {
    id: 1,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },
  {
    id: 2,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },
  {
    id: 3,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },
  {
    id: 4,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },
  {
    id: 5,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },
  {
    id: 6,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },
  {
    id: 7,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },
  {
    id: 8,
    name: 'Мухамеджан',
    src: '',
    occupation: 'gay and homosexual',
  },

])

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 120px;
  width: 100%;
  align-items: center;
}
</style>