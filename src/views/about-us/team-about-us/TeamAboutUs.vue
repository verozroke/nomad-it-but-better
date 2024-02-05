<template>
  <v-parallax
    id="team-about-us"
    src="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    class="about-us"
  >
    <div class="about-us__overlay">
      <div class="about-us__container">
        <div class="about-us__title">О нас:</div>
        <div class="about-us__text">
          В CNomad мы создаем не просто сайты, мы оживляем ваш бизнес в цифровом мире. Наша команда экспертов
          разрабатывает уникальные веб-сайты, мобильные приложения и онлайн-магазины, применяя новейшие технологии. <br>
          <br>

          Мы создаем чат-боты для WhatsApp и Telegram, интеграции систем, облегчая вам общение с клиентами. Наши дизайнеры
          мастерски разрабатывают логотипы и дизайны сайтов, делая каждый проект неповторимым. А с настройкой
          таргетированной рекламы мы помогаем вашему бизнесу быть на шаг впереди конкурентов. <br> <br>

          CNomad - ваш ключ к успешному присутствию в Интернете!
        </div>
      </div>
    </div>
  </v-parallax>
</template>

<script lang="ts" setup>

function scrollDown(blockID: string) {
  const $block = document.getElementById(blockID)
  $block?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

</script>

<style lang="scss" scoped>
.about-us {
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000091;
    backdrop-filter: blur(5px);
  }

  height: 100vh;
  position: relative;


  &__container {

    color: #fff;
    height: 100%;
    width: 100%;
    gap: 2em;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__title {
    display: flex;
    gap: .5em;
    align-items: center;
    font-size: 58px;
  }

  &__text {
    width: 80%;
    font-size: 24px;
  }

  .v-btn {
    width: 40%;
  }
}


@media only screen and (max-width: 1052px) {
  .about-us {
    &__container {
      padding: 20px 50px;

    }

    &__title {
      flex-direction: column;
      align-items: start;
    }
  }
}

@media only screen and (max-width: 790px) {
  .about-us {
    &__text {
      font-size: 16px;
      width: 100%;
    }
  }
}


@media only screen and (max-width: 380px) {
  .about-us {
    &__text {
      font-size: 14px;
      width: 100%;
    }

    &__container {
      padding: 20px 20px;
    }
  }
}
</style>