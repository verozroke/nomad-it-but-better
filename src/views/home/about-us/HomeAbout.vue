<template>
  <div class="about">
    <div class="about__container">
      <div class="about__info">
        <div class="about__title">О нас</div>
        <div class="about__text">Компания с <b>комплексным подходом</b> в работе с бизнесом. Мы работаем над всеми
          задачами
          необходимые современному бизнесу.
          Начиная от <b>лого</b> и <b>брендирования</b>, заканчивая его <b>маркетингом</b> и <b>технической</b>
          составляющей.
        </div>
      </div>
      <div class="about__circle">
        <!-- FIXME: new image -->
        <!-- <img src="/about-us.png" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.about {
  padding: 40px 0;
  background-color: #fff;


  &__container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 0;
    gap: 40px;
    justify-content: center;
  }

  &__title {
    color: #000;
    z-index: 1;
    font-family: 'Inter', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__text {
    color: #000;
    z-index: 1;
    font-family: 'Inter', sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    & b {
      color: #2D3DFF;
    }
  }

  &__circle {
    width: 545px;
    height: 545px;

    & img {
      transform: scale(1.3);
      width: 545px;
      height: 545px;
    }

  }

}

@media only screen and (max-width: 1156px) {
  .about {
    &__container {
      flex-direction: column;
    }

    &__title {
      text-align: center;
    }

    &__info {
      width: 80%;
      text-align: center;
    }
  }
}


@media only screen and (max-width: 640px) {
  .about {

    &__text {
      font-size: 22px;
    }

    &__circle {
      & img {
        transform: scale(1);
      }
    }
  }
}


@media only screen and (max-width: 460px) {
  .about {

    &__text {
      font-size: 16px;
    }

    &__circle {
      & img {
        transform: scale(.7);
      }
    }
  }
}
</style>