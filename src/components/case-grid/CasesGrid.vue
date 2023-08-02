<template>
  <div class="blocks">
    <CasesCell v-for="block in blocks" :key="block.id" :src="block.src" />
  </div>
</template>

<script lang="ts" setup >
import CasesCell from './CasesCell.vue'
import { ref } from 'vue'

const blocks = ref([
  {
    id: 1,
    src: '1.jfif'
  },
  {
    id: 2,
    src: '2.jfif'
  },
  {
    id: 3,
    src: '1.jfif'
  },
  {
    id: 4,
    src: '2.jfif'
  },
  {
    id: 5,
    src: '1.jfif'
  },
  {
    id: 6,
    src: '1.jfif'
  }
])
</script>

<style lang="scss" scoped>
.blocks {
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
}
</style>
