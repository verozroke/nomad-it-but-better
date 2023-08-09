<template>
  <RouterLink :to="{ name: pageName }" class="item" @mouseenter="serviceStore.setCurrentCard(cardNumber)">
    <div class="item__back">
      {{ serviceName }}
    </div>
    <div class="item__image"><img :src="imgSrc" alt=""></div>
  </RouterLink>
</template>

<script setup lang="ts">
import { useServiceStore } from '@/stores/ServiceStore';


const serviceStore = useServiceStore()

defineProps<{
  cardNumber: number
  serviceName: string
  imgSrc: string
  pageName: string
}>()
</script>

<style lang="scss" scoped>
.item {
  width: 226px;
  border-radius: 30px;
  height: 317px;
  position: relative;
  overflow: hidden;
  border: 1px solid #000;

  &:hover {
    .item__image {
      transform: translateY(64px);
      transition: .4s;
    }
  }


  &__back {
    padding: 20px 0;
    border-radius: 30px;
    display: flex;
    color: #000;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    height: 100%;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: normal;
    width: 100%;
  }

  &__image {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 30px;
    left: 0;
    right: 0;

    transition: .4s;

    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 30px;
    }
  }
}
</style>