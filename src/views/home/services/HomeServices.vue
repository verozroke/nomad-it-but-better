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
  background-color: #fff;

  &__container {
    display: flex;
    gap: 45px;
    flex-direction: column;
  }



  &__title {
    color: #000;
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
    justify-content: center;
    display: flex;
    gap: 100px;
    align-items: center;
  }
}




@media only screen and (max-width: 1220px) {
  .services {
    &__title {
      text-align: center;
    }
  }
}
</style>