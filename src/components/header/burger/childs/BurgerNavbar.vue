<template>
  <ul class="header__row">
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
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'

const headerStore = useHeaderStore()


</script>

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 2em;
  justify-content: center;

  & li a {
    color: #fff;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      color: #fff;
    }
  }
}
</style>
