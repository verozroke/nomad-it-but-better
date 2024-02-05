<template>
  <div class="blocks">
    <CasesCell
      v-if="type === 'design'"
      v-for="block in designBlocks"
      :title="block.title"
      :key="block.id"
      :src="block.src"
    />
    <CasesCell
      v-if="type === 'dev'"
      v-for="block in devBlocks"
      :key="block.id"
      :title="block.title"
      :src="block.src"
    />
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
    id: 11,
    title: 'Приложение iSecurity для МЧС РК',
    src: '/grid/dev/6.png'
  },
  {
    id: 1,
    title: 'Дизайн PAP',
    src: '/grid/design/1.png'
  },
  {
    id: 2,
    title: 'Дизайн Мастер Голд',
    src: '/grid/design/2.png'
  },
  {
    id: 3,
    title: 'Дизайн демонтажных услуг',
    src: '/grid/design/3.png'
  },
  {
    id: 4,
    title: 'Дизайн StarTarget',
    src: '/grid/design/4.png'
  },
  {
    id: 5,
    title: 'Дизайн Сберстрой',
    src: '/grid/design/5.png'
  },
  {
    id: 6,
    title: 'Дизайн Профессионального Менеджера Татьяны',
    src: '/grid/design/6.png'
  },
  {
    id: 7,
    title: 'Design Republic',
    src: '/grid/design/7.png'
  },
  {
    id: 8,
    title: 'Intelsib',
    src: '/grid/design/8.png'
  },
  {
    id: 9,
    title: 'TravelBreeze',
    src: '/grid/design/9.png'
  },
  {
    id: 10,
    title: 'Globamba',
    src: '/grid/design/10.png'
  },
  {
    id: 12,
    title: 'Nomad Duken',
    src: '/grid/dev/1.png'
  },
])

const devBlocks = ref([

  {
    id: 2,
    title: 'Crew Central Asia 2023',
    src: '/grid/dev/2.png'
  },
  {
    id: 3,
    title: 'Сайт-визитка визажистки',
    src: '/grid/dev/3.png'
  },
  {
    id: 4,
    title: 'Симулятор шелвинга для компании Apple City Corp.',
    src: '/grid/dev/4.png'
  },
  {
    id: 5,
    title: 'Гайдлайн Курсы Маркетинга для компании Apple City Corp.',
    src: '/grid/dev/5.png'
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
