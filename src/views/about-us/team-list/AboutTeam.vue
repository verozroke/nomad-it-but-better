<template>
  <div class="team">
    <div class="team__container">
      <div class="team__title">Команда</div>
      <TeamList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TeamList from './list/TeamList.vue'

</script>

<style lang="scss" scoped>
.team {
  padding: 40px 0;
  background-color: #fff;

  &__title {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 50px;
    font-style: normal;
    text-align: center;
    font-weight: 700;
    line-height: normal;
    z-index: 1;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>