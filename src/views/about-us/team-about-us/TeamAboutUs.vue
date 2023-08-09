<template>
  <v-parallax id="team-about-us"
    src="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    class="about-us">
    <div class="about-us__overlay">
      <div class="about-us__container">
        <div class="about-us__title">О нас:</div>
        <div class="about-us__text">
          Добро пожаловать в команду инновационных разработчиков и дизайнеров! <br>
          Мы занимаемся разработкой разнообразных IT-продуктов, включая веб-сайты, ботов, макеты и обучающие курсы. <br>
          <br>
          Впервую очередь мы заинтересованы в реализации ваших замечательных идей!
        </div>
        <v-btn @click="scrollDown('team-list')" variant="outlined">Далее</v-btn>
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
    font-family: 'Exo 2', sans-serif;

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