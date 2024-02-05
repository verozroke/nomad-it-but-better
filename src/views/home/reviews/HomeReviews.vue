<template>
  <div class="reviews">
    <div class="reviews__container">
      <div class="reviews__title">Отзывы</div>
      <v-carousel
        class="carousel"
        cycle
        style="width: 70% !important; height: fit-content; padding: 20px 0;"
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="review in reviews"
          :key="review.id"
        >
          <ReviewCard :review="review" />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ReviewCard from './card/ReviewCard.vue'
import type { Review } from './card/ReviewCard.vue'
const reviews = ref<Review[]>([
  {
    id: 1, // Assuming this is the first review, hence id = 1
    name: 'Али Мустафаев',
    field: 'Программирование',
    stars: 5,
    description: 'Отличный репетитор. Просто и четко объяснил тему. Плюс есть домашние работы для закрепления материала.',
  },
  {
    id: 2,
    name: 'Алина',
    field: 'Разработка на Java',
    stars: 5,
    description: 'Отличный преподаватель, все ясно объясняет и показывает на практике'
  },
  {
    id: 3,
    name: 'Зарина',
    field: 'Обучение веб-программированию',
    stars: 5,
    description: 'Спасибо Асхату за ясное объяснение материала. С его помощью я успешно выполняю сложный университетский проект, связанный с SQL и веб-разработкой. Уже после первого занятия мои навыки значительно улучшились. Все четко и понятно. Рекомендую данного репетитора !🙌'
  },
  {
    id: 4,
    name: 'Евгений',
    field: 'Обучение Javascript',
    stars: 5,
    description: 'Хороший преподаватель, доступно объясняет. Рекомендую!'
  },
  {
    id: 5,
    name: 'Виктория',
    field: 'Обучение Vue.js',
    stars: 5,
    description: 'Доступно и понятно пояснили, объяснили. Отзывчив, опытен и честен. С заказом не затянул, спасибо, помогли с защитным проектом'
  },
  {
    id: 6,
    name: 'Екатерина',
    field: 'Обучение Javascript',
    stars: 5,
    description: 'Асхат отличный специалист, доступно и понятно объяснил мне тему и помог с решеним вопроса! Благодарю!'
  },
  {
    id: 7,
    name: 'Александра',
    field: 'Создание аккаунта Instagram',
    stars: 5,
    description: 'Хороший мастер своего дела. Оформил мою страницу, учтя всё пожелания. Быстро. Однозначно советую!'
  },
  {
    id: 8,
    name: 'Сергей',
    field: 'Обучение Django',
    stars: 5,
    description: 'Работа сделана в оговоренные сроки. Отличный код.'
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
    justify-content: center;
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