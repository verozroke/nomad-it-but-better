<template>
  <div class="banner">
    <div class="banner__overlay">
      <div class="banner__container">
        <div class="banner__title">Мастер-классы</div>
        <!-- <v-btn class="banner__button"  variant="outlined" width="500px" size="large"
          style=" font-weight: 500;">Узнать о
          наших доступных
          курсах</v-btn> -->
        <div @click="scrollDown('workshop-list')" class="banner__button">Узнать более</div>
      </div>
    </div>
  </div>
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
.banner {
  background-image: url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 125px);
  position: relative;

  &__title {
    font-size: 100px;
    text-align: left;
    font-family: 'Exo 2', sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    width: 100%;
  }

  &__overlay {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.585);
    backdrop-filter: blur(5px);
  }

  &__container {
    color: #fff;
    height: 100%;
    display: flex;
    gap: 3em;
    flex-direction: column;
    padding: 0 20px 80px 20px;
    justify-content: end;
  }

  &__button {
    padding: 10px 40px;
    border-radius: 5px;


    width: fit-content;
    // background: none;
    transition: .4s;
    position: relative;
    background-color: #fff;
    color: #000;
    letter-spacing: 3px;

    &:hover:after {
      opacity: 1;
      // background: linear-gradient(158deg, rgba(0, 20, 255, 0.80) 0%, rgba(0, 255, 91, 0.80) 100%);
      transition: .4s;
    }

    &:hover {
      color: #FFF;
    }



    &:after {
      content: 'Узнать более';
      position: absolute;
      color: #FFF;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0px;
      top: 0px;
      right: 0px;
      border-radius: 5px;
      bottom: 0px;
      background-image: linear-gradient(158deg, rgba(0, 20, 255, 0.80) 0%, rgba(0, 255, 91, 0.80) 100%);
      opacity: 0;
      transition: all .4s ease-in-out;
    }


    text-align: center;
    font-size: 21px;
    font-family: 'Inter',
    sans-serif;

    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}


@media only screen and (max-width: 780px) {
  .banner {
    &__title {
      font-size: 40px;
      text-align: center;
    }

    &__container {
      align-items: center;
    }

    &__button {
      font-size: 9px !important;
    }
  }
}
</style>