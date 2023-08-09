<template>
  <div class="team">
    <TeamHero />
    <TeamAboutUs />
    <AboutTeam />
  </div>
</template>

<script lang="ts" setup>
import TeamHero from './team-hero/TeamHero.vue';
import TeamAboutUs from './team-about-us/TeamAboutUs.vue'
import AboutTeam from './team-list/AboutTeam.vue';


import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-direction: column;
}
</style>