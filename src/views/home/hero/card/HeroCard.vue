<template>
  <div class="card">
    <div class="card__overlay"></div>
    <div class="card__item"></div>
    <div class="card__item"></div>
    <div class="card__item"></div>
    <div class="card__item"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.card {
  border-radius: 30px;
  background: linear-gradient(139deg, rgba(183, 183, 183, 0.20) 0%, rgba(129, 129, 129, 0.20) 100%);
  backdrop-filter: blur(7.5px);
  width: 100%;
  border: 2px solid white;
  height: 222px;
  margin-top: 30px;
  position: relative;

  &__overlay {
    position: absolute;
    top: 0;
    height: 200px;
    overflow: hidden;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 1031px;
    background: #00053D;
    filter: blur(200px);
  }
}
</style>