<script setup lang="ts">
import HomeHero from './hero/HomeHero.vue'
import HomeTeam from './team/HomeTeam.vue'
import HomeServices from './services/HomeServices.vue'
import HomeAbout from './about-us/HomeAbout.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div id="Home">
    <HomeHero />
    <HomeServices />
    <HomeTeam />
    <HomeAbout />
  </div>
</template>


<style lang="scss" scoped></style>
