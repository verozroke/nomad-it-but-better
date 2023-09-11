<template>
  <div class="services">
    <div class="services__container">
      <div class="services__title hidden">Выбери услугу:</div>
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


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})



setTimeout(() => {
  let titleElements = document.querySelectorAll('.services__title.hidden')

  let hiddenElements = [
    ...titleElements,
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)


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

    &.hidden {
      opacity: 0;
      transition: all 1.3s;
      filter: blur(20px);
      transform: translateX(-300px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateX(0);
    }
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