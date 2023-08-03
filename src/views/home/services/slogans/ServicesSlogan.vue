<template>
  <div class="slogan">{{ sloganName }}</div>
</template>

<script setup lang="ts">
defineProps({
  sloganName: String
})
</script>

<style scoped>
.slogan {
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 80px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: normal;
}
</style>