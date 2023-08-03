<template>
  <div class="item">
    <div class="item__card">
      <div class="item__overlay"></div>
      <div class="item__image">

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

  &__overlay {
    border-radius: 332px;
    background: #00053D;
    filter: blur(200px);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 36px 65px;
    width: 100%;
    height: 324px;
    border-radius: 30px;
    background: linear-gradient(139deg, rgba(183, 183, 183, 0.20) 0%, rgba(129, 129, 129, 0.20) 100%);
    backdrop-filter: blur(7.5px);
    border: 2px solid white;
  }

  &__name {
    color: #FFF;
    z-index: 1;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__title {

    color: #A7A7A7;
    text-align: center;
    font-size: 23px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>