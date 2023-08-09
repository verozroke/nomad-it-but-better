<template>
  <CasesGrid type="design" />
</template>

<script setup lang="ts">
import CasesGrid from '../../components/case-grid/CasesGrid.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped></style>