<template>
  <div class="header">
    <div class="header__container">
      <RouterLink :to="{ name: 'home' }" class="header__title" :style="{ flex: headerStore.isMobile ? '1 1 auto' : '' }">
        NOMAD it</RouterLink>
      <ul class="header__row" v-if="!headerStore.isMobile">
        <li>
          <RouterLink :to="{ name: 'AboutUs' }" href="">О нас</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Courses' }" href="">Мастер-классы </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'CasesDev' }" href="">Кейсы DEV</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'CasesDesign' }" href="">Кейсы Design</RouterLink>
        </li>
      </ul>
      <HeaderBurger v-if="headerStore.isMobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/HeaderStore';
import HeaderBurger from './burger/HeaderBurger.vue'


const headerStore = useHeaderStore()

</script>

<style lang="scss" scoped>
.header {
  height: 125px;
  background-color: #000;
  z-index: 999;


  &__container {
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 67px;
    height: 100%;
    font-family: 'Inter', sans-serif;
  }

  &__title {
    color: #FFF;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 50px;
    flex: 1 1 auto;

    & li a {
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      padding: 5px 20px;
      border-radius: 5px;
      line-height: normal;
      word-wrap: normal;
      color: transparent;
      background:
        linear-gradient(90deg, #fff 50%, #fff 0),
        linear-gradient(-90deg, #fff 50%, #fff 0),
        linear-gradient(90deg, #0000 50%, rgba(0, 20, 255, 0.80) 0%, rgba(0, 255, 91, 0.80) 100% 0),
        linear-gradient(-90deg, #0000 50%, rgba(0, 255, 91, 0.80) 0%, rgba(0, 20, 255, 0.80) 100% 0);
      background-repeat: no-repeat;
      background-size: 200% 51%;
      background-position: top left, bottom right;
      -webkit-background-clip: text, text, padding-box, padding-box;
      background-clip: text, text, padding-box, padding-box;
      transition: 0.4s;

      &:hover {
        background-position: top right, bottom left;
      }
    }
  }
}
</style>