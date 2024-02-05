<template>
  <div class="stages">
    <div class="stages__title hidden">
      <h2>Процесс работы</h2>
      <h3>5 шагов</h3>
    </div>
    <div class="stages__main">
      <div class="stages__bignum left">1</div>
      <div class="stages__line"></div>
      <div class="stages__textblock right hidden">
        <div class="stages__rainbowtitle">Связь с нами</div>
        <div class="stages__text">После связи с нами и ознакомления с вашим продуктом или услугой мы организуем созвон
        </div>
      </div>
      <div class="stages__textblock left hidden">
        <div class="stages__rainbowtitle">Обсуждение проекта</div>
        <div class="stages__text">Во время нашего созвона мы задаем вам вопросы чтобы получить всю необходимую и важную
          информацию о вашем бизнесе и лучше понять его цели и задачи.</div>
      </div>
      <div class="stages__bignum">2</div>
      <div class="stages__bignum left">3</div>
      <div class="stages__textblock right hidden">
        <div class="stages__rainbowtitle">Подключение программистов / дизайнеров / маркетологов</div>
        <div class="stages__text">После получения всей необходимой информации, мы распределяем работу между нашей командой
          для эффективного и планомерного выполнения задач.</div>
      </div>
      <div class="stages__textblock left hidden">
        <div class="stages__rainbowtitle">Процесс разработки</div>
        <div class="stages__text">Перед началом работ мы устанавливаем сроки, в которых подробно описываем все этапы
          процесса разработки.</div>
      </div>
      <div class="stages__bignum">4</div>
      <div class="stages__bignum left">5</div>
      <div class="stages__textblock right hidden">
        <div class="stages__rainbowtitle">Готовый проект</div>
        <div class="stages__text">После слаженной и комплексной работы наших сотрудников вы получаете готовый проект с
          продуманным дизайном, грамотным маркетингом и безупречной технической работы наших программистов</div>
      </div>
    </div>
  </div>
</template>]


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
  let stagesTitleElements = document.querySelectorAll('.stages__title.hidden')
  let stagesRightElements = document.querySelectorAll('.stages__textblock.right.hidden')
  let stagesLeftElements = document.querySelectorAll('.stages__textblock.left.hidden')

  let hiddenElements = [
    ...stagesTitleElements,
    ...stagesRightElements,
    ...stagesLeftElements,
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

.stages {
  padding-top: 8rem;
  padding-left: 14rem;
  padding-right: 14rem;

  background-color: #fff;
  color: #000;

  .stages__title {
    &.hidden {
      opacity: 0;
      transition: all .7s;
      filter: blur(20px);
      transform: translateX(-100px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateX(0);
    }

    h2 {
      font-family: Inter;
      font-size: 3.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    h3 {
      opacity: 0.4;
      font-family: Inter;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .stages__main {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    column-gap: 30px;


    .stages__line {
      grid-column: 2;
      grid-row: 1 / span 5;
      background: white;
      width: 1px;
    }

    .stages__bignum {
      font-family: Archivo Black;
      font-size: 12.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.2;

      &.left {
        text-align: right;
      }
    }

    .stages__textblock.left {
      text-align: right;
      float: right;

      &.hidden {
        opacity: 0;
        transition: all .7s;
        filter: blur(20px);
        transform: translateX(100px);
      }

      &.show {
        filter: blur(0);
        opacity: 1;
        transform: translateX(0);
      }
    }

    .stages__textblock.right {
      &.hidden {
        opacity: 0;
        transition: all .7s;
        filter: blur(20px);
        transform: translateX(-100px);
      }

      &.show {
        filter: blur(0);
        opacity: 1;
        transform: translateX(0);
      }
    }

    .stages__rainbowtitle {
      font-family: 'Inter';
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      max-width: 400px;

      margin-top: 20px;
      color: #000;
      // background: linear-gradient(167deg, #000C99 0%, #009234 100%);
      // background-clip: text;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }

    .stages__text {
      width: 400px;
      font-size: 1.5rem;
    }
  }
}


.stages__main__listversion {
  display: none;
  grid-template-columns: auto auto;
}

@media only screen and (max-width: 900px) {
  // .stages__main {
  //   display: none !important;
  // }

  .stages__main__listversion {
    display: static;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    column-gap: 30px;

    .stages__line {
      grid-column: 2;
      grid-row: 1 / span 5;
      background: white;
      width: 1px;
    }

    .stages__bignum {
      font-family: Archivo Black;
      font-size: 8rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.2;

      &.left {
        text-align: right;
      }
    }

    .stages__rainbowtitle {
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      max-width: 400px;
      margin-top: 20px;
      margin-bottom: 4px;
      background: linear-gradient(167deg, #000C99 0%, #009234 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stages__text {
      width: 400px;
      font-size: 1rem;
    }
  }
}

@media only screen and (max-width: 600px) {
  .stages {
    padding-top: 10rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .stages__main__listversion {
    width: 100%;

    .stages__rainbowtitle,
    .stages__text {
      width: 300px;
    }
  }
}

@media only screen and (max-width: 450px) {
  .stages__title {
    h2 {
      font-size: 1.5rem !important;
    }

    h3 {
      font-size: 1rem !important;
    }
  }

  .stages__main__listversion {
    .stages__bignum {
      font-size: 4.5rem;
    }

    .stages__rainbowtitle {
      margin-top: 5px;
    }

    .stages__text,
    .stages__rainbowtitle {
      width: 200px;
    }
  }
}
</style>