<template>
  <div class="team">
    <TeamHero />
    <TeamAboutUs />
    <TeamList />
  </div>
</template>

<script lang="ts" setup>
import TeamHero from './team-hero/TeamHero.vue';
import TeamAboutUs from './team-about-us/TeamAboutUs.vue'
import TeamList from './team-list/TeamList.vue';

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