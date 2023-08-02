<template>
  <div class="services">
    <div class="services__container">
      <div class="services__title">Выбери услугу:</div>
      <div class="services__box">
        <ServicesCard />
        <ServicesSlogans />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServicesCard from './card/ServicesCard.vue'
import ServicesSlogans from './slogans/ServicesSlogans.vue'

</script>

<style lang="scss" scoped>
.services {
  padding: 40px 0;
  background-color: #000;

  &__container {
    display: flex;
    gap: 45px;
    flex-direction: column;
  }



  &__title {
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 1;
    width: 100%;
  }

  &__box {
    width: 100%;
    display: flex;
    gap: 100px;
    align-items: center;
  }
}
</style>