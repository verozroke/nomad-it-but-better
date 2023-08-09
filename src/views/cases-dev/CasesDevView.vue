<script setup lang="ts">
import CasesGrid from "../../components/case-grid/CasesGrid.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <main class="main">
    <div class="main__container">
      <h1 class="main__title">Кейсы програмирования</h1>

      <div class="main__list">
        <p class="main__item">создание полноценных веб-сайтов</p>
        <p class="main__item">front-end</p>
        <p class="main__item">верстка лендингов</p>
        <p class="main__item">it-консультация</p>
        <p class="main__item">создание внутренних корпаративных веб-платформ</p>
        <p class="main__item">back-end</p>
        <p class="main__item">создание ботов</p>
      </div>
    </div>
  </main>
  <CasesGrid type="dev" />
</template>

<style scoped lang="scss">
.main {
  &__title {
    margin-top: 1.25rem;
    padding-left: 0.5rem;

    font-size: 3.125rem;
    font-weight: 700;
    line-height: normal;
  }

  &__list {
    padding-top: 8.375rem;
    padding-bottom: 7.25rem;
    padding-inline: 0.5rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  &__item {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
