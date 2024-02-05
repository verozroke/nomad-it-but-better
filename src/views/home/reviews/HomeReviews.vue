<template>
  <div class="reviews">
    <div class="reviews__container">
      <div class="reviews__title">Отзывы</div>
      <div class="reviews__subtitle">c 2023</div>
      <v-carousel
        class="carousel"
        cycle
        hide-delimiters
      >
        <v-carousel-item
          v-for="item in items"
          :key="item.id"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  {
    id: 1,
    src: '/reviews/1.jpg',
  },
  {
    id: 2,
    src: '/reviews/2.jpg',
  },
  {
    id: 3,
    src: '/reviews/3.jpg',
  },
  {
    id: 4,
    src: '/reviews/4.jpg',
  }
])

</script>

<style scoped lang="scss">
.reviews {
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
    font-weight: 700;
  }

}

.carousel {
  border-radius: 10px
}
</style>