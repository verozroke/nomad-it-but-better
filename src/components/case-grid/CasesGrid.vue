<template>
  <div class="blocks">
    <CasesCell v-if="type === 'design'" v-for="block in designBlocks" :title="block.title" :key="block.id"
      :src="block.src" />
    <CasesCell v-if="type === 'dev'" v-for="block in devBlocks" :key="block.id" :src="block.src" />
  </div>
</template>

<script lang="ts" setup >
import CasesCell from './CasesCell.vue'
import { ref } from 'vue'

defineProps<{
  type: string
}>()

const designBlocks = ref([
  {
    id: 1,
    title: 'Дизайн PAP',
    src: '/nomad-it-but-better/grid/design/1.png'
  },
  {
    id: 2,
    title: 'Дизайн Мастер Голд',
    src: '/nomad-it-but-better/grid/design/2.png'
  },
  {
    id: 3,
    title: 'Дизайн демонтажных услуг',
    src: '/nomad-it-but-better/grid/design/3.png'
  },
  {
    id: 4,
    title: 'Дизайн StarTarget',
    src: '/nomad-it-but-better/grid/design/4.png'
  },
  {
    id: 5,
    title: 'Дизайн Сберстрой',
    src: '/nomad-it-but-better/grid/design/5.png'
  },
  {
    id: 6,
    title: 'Дизайн Профессионального Менеджера Татьяны',
    src: '/nomad-it-but-better/grid/design/6.png'
  },
  {
    id: 7,
    title: 'Design Republic',
    src: '/nomad-it-but-better/grid/design/7.png'
  },
  {
    id: 8,
    title: 'Intelsib',
    src: '/nomad-it-but-better/grid/design/8.png'
  },
  {
    id: 9,
    title: 'TravelBreeze',
    src: '/nomad-it-but-better/grid/design/9.png'
  },
  {
    id: 10,
    title: 'Globamba',
    src: '/nomad-it-but-better/grid/design/10.png'
  },
])

const devBlocks = ref([
  {
    id: 1,
    title: 'Globamba',
    src: '/nomad-it-but-better/grid/design/1.png'
  },
])
</script>

<style lang="scss" scoped>
.blocks {
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
}
</style>
