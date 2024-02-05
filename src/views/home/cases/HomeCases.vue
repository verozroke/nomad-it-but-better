<template>
  <div class="cases">
    <div class="cases__container">
      <div class="cases__title">Кейсы</div>
      <div class="cases__subtitle">Здесь вы можете ознакомиться со всеми нашими заказами.</div>
      <div class="cases__col">
        <CasesGrid type="design" />
        <CasesGrid type="dev" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CasesGrid from '../../../components/case-grid/CasesGrid.vue'


</script>

<style scoped lang="scss">
.cases {
  padding: 5rem 0 0 0;
  background-color: #fff;

  &__title {
    color: #000;
    z-index: 1;
    font-family: 'Inter', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 2em;
    justify-content: space-between;
  }

  &__subtitle {
    color: #000;
    z-index: 1;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    text-align: center;
    font-weight: 700;
  }

  &__col {
    display: flex;
    flex-direction: column;
  }

}


@media only screen and (max-width: 824px) {
  .cases {

    &__subtitle {
      font-size: 14px;
    }


  }
}
</style>