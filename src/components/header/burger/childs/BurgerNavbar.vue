<template>
  <ul class="header__row">
    <li>
      <div class="title">NOMAD It</div>
    </li>
    <li>
      <RouterLink @click="headerStore.burger = false" :to="{ name: 'Home' }" href=""><v-btn width="100%">Главная</v-btn>
      </RouterLink>
    </li>
    <li>
      <RouterLink @click="headerStore.burger = false" :to="{ name: 'AboutUs' }" href=""><v-btn width="100%">О нас</v-btn>
      </RouterLink>
    </li>
    <li>
      <RouterLink @click="headerStore.burger = false" :to="{ name: 'Courses' }" href=""> <v-btn
          width="100%">Мастер-классы</v-btn> </RouterLink>
    </li>
    <li>
      <RouterLink @click="headerStore.burger = false" :to="{ name: 'CasesDev' }" href=""> <v-btn width="100%">Кейсы
          DEV</v-btn> </RouterLink>
    </li>
    <li>
      <RouterLink @click="headerStore.burger = false" :to="{ name: 'CasesDesign' }" href=""> <v-btn width="100%">Кейсы
          Design</v-btn> </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/HeaderStore'

const headerStore = useHeaderStore()


</script>

<style lang="scss" scoped>
.title {
  color: #FFF;
  font-size: 35px;
  font-style: normal;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
  line-height: normal;
}

ul {
  display: flex;
  flex-direction: column;
  width: 100%;
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
