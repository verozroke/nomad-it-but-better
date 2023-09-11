<template>
  <div class="about">
    <div class="about__container">
      <div class="about__info hidden">
        <div class="about__title">О нас</div>
        <div class="about__text">Компания с <b>комплексным подходом</b> в работе с бизнесом. Мы работаем над всеми
          задачами
          необходимые современному бизнесу.
          Начиная от <b>лого</b> и <b>брендирования</b>, заканчивая его <b>маркетингом</b> и <b>технической</b>
          составляющей.
        </div>
      </div>
      <div class="about__image hidden">
        <img
          src="https://images.unsplash.com/photo-1589884629108-3193400c7cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})



setTimeout(() => {
  let infoElements = document.querySelectorAll('.about__info.hidden')
  let imageElements = document.querySelectorAll('.about__image.hidden')

  let hiddenElements = [
    ...infoElements,
    ...imageElements
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>

<style lang="scss" scoped>
.about {
  padding: 5rem 0 0 0;
  background-color: #fff;


  &__container {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2em;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 0;
    gap: 40px;
    width: 50%;
    justify-content: center;

    &.hidden {
      opacity: 0;
      transition: all .7s;
      filter: blur(20px);
      transform: translateX(-200px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateX(0);
    }

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

  &__image {
    width: 50%;

    &.hidden {
      opacity: 0;
      transition: all .7s;
      filter: blur(20px);
      transform: translateX(200px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateX(0);
    }


    & img {
      border-radius: 20px;
      width: 100%;
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