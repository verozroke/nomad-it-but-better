<template>
  <div class="list" id="workshop-list">
    <div class="list__container">
      <!-- FIXME: откорректируй цвета -->
      <div class="list__title">Доступные мастер классы</div>
      <div class="list__workshops">
        <WorkshopCard v-for="card in cards" :key="card.id" :title="card.title" :price="card.price"
          :old-price="card.oldPrice" :duration="card.duration" :difficulty="card.difficulty" :banner-src="card.bannerSrc"
          :plan-src="card.planSrc" :forms-link="card.formsLink" :whatsapp-link="card.whatsappLink" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup >
import { ref } from 'vue';
import WorkshopCard from './item/CoursesCard.vue';



const cards = ref([
  {
    id: 1,
    title: 'HTML & CSS',
    price: 'Ознакомься со всей спецификой разработки веб-приложений!',
    oldPrice: '32 500',
    duration: '2-4 часа',
    difficulty: 'Лёгкий',
    bannerSrc: 'https://miro.medium.com/v2/resize:fit:1400/1*esOa9npMi79rC50Ds3nR1g.png',
    planSrc: '/storage/program.pdf',
    formsLink: 'https://forms.gle/n6VeD6hukZLzMM4v6',
    whatsappLink: 'https://api.whatsapp.com/send/?phone=77053505988'
  },
  {
    id: 2,
    title: 'Мастер-класс Python',
    price: 'Войди в мир разработки с самого популярного языка программирования!',
    oldPrice: '32 500',
    duration: '2-3 часа',
    difficulty: 'Лёгкий',
    bannerSrc: 'https://www.sapphiresolutions.net/images/hire_python_developers/images/hire_python_about.svg',
    planSrc: '/storage/program.pdf',
    formsLink: 'https://forms.gle/JfneSPeuz9d1Rwm8A',
    whatsappLink: 'https://api.whatsapp.com/send/?phone=77053505988'
  },
  {
    id: 3,
    title: 'Курс по Fast API',
    price: 'Изучил Python? Хочешь изучить Backend самым лёгчайшим способом? Записывайся на курс!',
    oldPrice: '32 500',
    duration: '10 недель',
    difficulty: 'Средний',
    bannerSrc: 'https://global-uploads.webflow.com/635fa3820d7afd54c905f3e5/64dc881332a2514bd5affa4b_FAST%20API%20Developers.svg',
    planSrc: '/storage/program.pdf',
    formsLink: 'https://forms.gle/eXsjssMo42R5a9VD7',
    whatsappLink: 'https://api.whatsapp.com/send/?phone=77053505988'
  },
  {
    id: 4,
    title: 'Курс по Javascript',
    price: 'Вёрстка конечно хорошо, но пора бы уже добавить функционала на твой сайт! Записывайся!',
    oldPrice: '32 500',
    duration: '4-5 недель',

    difficulty: 'Средний',
    bannerSrc: 'https://img.freepik.com/free-vector/javascript-abstract-concept-illustration_335657-3702.jpg?w=2000',
    planSrc: '/storage/program.pdf',
    formsLink: 'https://forms.gle/QA3Hv78n8U6vvbwNA',
    whatsappLink: 'https://api.whatsapp.com/send/?phone=77053505988'
  },
])

</script>

<style lang="scss" scoped>
.list {
  padding: 60px 0;
  background-color: #fff;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
  }

  &__workshops {
    display: flex;
    flex-direction: column;
    gap: 5em;
  }

  &__title {
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 50px;
    color: #000;
  }
}
</style>