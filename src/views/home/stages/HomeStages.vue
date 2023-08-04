<template>
  <div class="stages">
    <div class="stages__title">
      <h2>Процесс работы</h2>
      <h3>5 шагов</h3>
    </div>
    <div class="stages__main">
      <div class="stages__bignum left">1</div>
      <div class="stages__line"></div>
      <div class="stages__textblock">
        <div class="stages__rainbowtitle">Обсуждение проекта</div>
        <div class="stages__text">Во время нашего созвона мы задаем вам вопросы чтобы получить всю необходимую и важную информацию о вашем бизнесе и лучше понять его цели и задачи.</div>
      </div>
      <div class="stages__textblock">
        <div class="stages__rainbowtitle">Обсуждение проекта</div>
        <div class="stages__text">Во время нашего созвона мы задаем вам вопросы чтобы получить всю необходимую и важную информацию о вашем бизнесе и лучше понять его цели и задачи.</div>
      </div>
      <div class="stages__bignum">2</div>
      <div class="stages__bignum left">3</div>
      <div class="stages__textblock">
        <div class="stages__rainbowtitle">Обсуждение проекта</div>
        <div class="stages__text">Во время нашего созвона мы задаем вам вопросы чтобы получить всю необходимую и важную информацию о вашем бизнесе и лучше понять его цели и задачи.</div>
      </div>
      <div class="stages__textblock">
        <div class="stages__rainbowtitle">Обсуждение проекта</div>
        <div class="stages__text">Во время нашего созвона мы задаем вам вопросы чтобы получить всю необходимую и важную информацию о вашем бизнесе и лучше понять его цели и задачи.</div>
      </div>
      <div class="stages__bignum">4</div>
      <div class="stages__bignum left">5</div>
      <div class="stages__textblock">
        <div class="stages__rainbowtitle">Обсуждение проекта</div>
        <div class="stages__text">Во время нашего созвона мы задаем вам вопросы чтобы получить всю необходимую и важную информацию о вашем бизнесе и лучше понять его цели и задачи.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
.stages {
  padding-top: 10rem;
  padding-left: 14rem;
  padding-right: 14rem;

  background-color: black;
  color: white;

  .stages__title {
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

    .stages__rainbowtitle {
      font-family: 'Inter';
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      background: linear-gradient(167deg, #000C99 0%, #009234 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stages__text {
      width: 558px;
    }
  }
}
</style>