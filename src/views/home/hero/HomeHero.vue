<template>
  <div class="hero">
    <div class="hero__container hidden">
      <div class="hero__title">Современное решение современных бизнесов</div>
      <div class="hero__subtitle">Сайты, приложение, дизайн, маркетинг</div>
      <div class="hero__button-text">Услуги</div>
      <div
        class="hero__button"
        @click="scrollDown('about')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="23"
          viewBox="0 0 16 23"
          fill="none"
        >
          <path
            d="M7.29289 21.7295C7.68342 22.1201 8.31658 22.1201 8.70711 21.7295L15.0711 15.3656C15.4616 14.9751 15.4616 14.3419 15.0711 13.9514C14.6805 13.5608 14.0474 13.5608 13.6569 13.9514L8 19.6082L2.34315 13.9514C1.95262 13.5608 1.31946 13.5608 0.928932 13.9514C0.538408 14.3419 0.538408 14.9751 0.928932 15.3656L7.29289 21.7295ZM7 0L7 21.0224H9L9 0L7 0Z"
            fill="black"
          />
        </svg>
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





function scrollDown(blockID: string) {
  const $block = document.getElementById(blockID)
  $block?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}


setTimeout(() => {
  let containerElements = document.querySelectorAll('.hero__container.hidden')

  let hiddenElements = [
    ...containerElements,
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)

</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 125px);
  background-color: #fff;
  position: relative;


  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;

    &.hidden {
      opacity: 0;
      transition: all 1.5s;
      filter: blur(20px);
      transform: translateY(300px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateY(0%);
    }
  }

  &__title {
    color: #000;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: normal;
    z-index: 1;
    margin-bottom: .2em;
  }

  &__subtitle {
    color: #000;
    text-align: center;
    z-index: 1;
    font-family: 'Inter', sans-serif;

    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 1.5em;

  }

  &__button-text {
    z-index: 1;
    color: #000;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20px;

  }

  &__button {
    z-index: 1;

  }
}


@media only screen and (max-width: 824px) {
  .hero {
    &__title {
      font-size: 42px;
      width: 80%;
    }

    &__subtitle {
      font-size: 18px;
    }

    &__button-text {
      font-size: 14px;
    }
  }
}

@media only screen and (max-width: 824px) {
  .hero {
    &__title {
      font-size: 24px;
      width: 80%;
    }

    &__subtitle {
      font-size: 14px;
    }

    &__button-text {
      font-size: 12px;
    }
  }
}
</style>