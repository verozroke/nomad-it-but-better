<template>
  <div class="header">
    <div class="header__container">
      <RouterLink
        :to="{ name: 'Home' }"
        class="header__title"
        :style="{ flex: headerStore.isMobile ? '1 1 auto' : '' }"
      >
        CNomad</RouterLink>
      <ul
        class="header__row"
        v-if="!headerStore.isMobile"
      >
        <li>
          <RouterLink
            :to="{ name: 'AboutUs' }"
            href=""
          >О нас</RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'Courses' }"
            href=""
          >Мастер-классы
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'CasesDev' }"
            href=""
          >Кейсы DEV</RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'CasesDesign' }"
            href=""
          >Кейсы Design</RouterLink>
        </li>
      </ul>
      <HeaderBurger v-if="headerStore.isMobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from "@/stores/HeaderStore";
import HeaderBurger from "./burger/HeaderBurger.vue";

const headerStore = useHeaderStore();
</script>

<style lang="scss" scoped>
.header {
  height: 125px;
  background-color: #fff;
  z-index: 999;

  &__container {
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 67px;
    height: 100%;
    font-family: "Inter", sans-serif;
  }

  &__title {
    color: #000;
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
      color: #000;
      transition: .2s;


      &:hover {
        background-color: #000;
        color: #fff;
        transition: .2s;
      }
    }
  }
}
</style>
