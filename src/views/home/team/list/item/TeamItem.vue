<template>
  <div class="item">
    <div class="item__card">
      <div class="item__image">
        <img :src="src" alt="">
      </div>
      <div class="item__name">
        {{ name }}
      </div>
    </div>
    <div class="item__title">
      {{ occupation }}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  name: String,
  occupation: String,
  src: String,
})

</script>

<style lang="scss" scoped>
.item {
  width: 304px;
  display: flex;
  flex-direction: column;
  gap: 30px;



  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    padding: 30px 40px;
    width: 100%;
    height: 344px;
    border-radius: 30px;
    border: 2px solid #000;
  }

  &__name {
    color: #000;
    z-index: 1;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__title {

    color: #494949;
    text-align: center;
    font-size: 23px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__image {
    width: 100%;
    height: 250px;

    & img {
      z-index: 999;
      border-radius: 26px;
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
}
</style>