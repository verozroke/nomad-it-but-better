<template>
  <div class="courses">
    <CoursesBanner />
    <CoursesList />
  </div>
</template>

<script setup lang="ts">
import CoursesBanner from './banner/CoursesBanner.vue'
import CoursesList from './list/CoursesList.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style scoped></style>