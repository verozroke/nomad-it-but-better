<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"
    class="hero">
    <div class="hero__overlay">
      <div class="hero__container">
        <div class="hero__title">Добро пожаловать в Nomad IT <v-btn @click="scrollDown('team-about-us')"
            variant="outlined">Читать далее</v-btn></div>
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
.hero {
  height: calc(100vh - 125px);
  // background-image: url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80');

  position: relative;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0000009d;
    backdrop-filter: blur(5px);
  }

  &__container {
    font-family: 'Exo 2', sans-serif;

    color: #fff;
    height: 100%;
    width: 100%;
    gap: 2em;
    padding-bottom: 50px;
    display: flex;
    align-items: flex-end;
  }

  &__title {
    display: flex;
    gap: .5em;
    align-items: center;
    font-size: 58px;
  }

  &__text {
    font-family: 'Montserrat', sans-serif;
    width: 70%;
    font-size: 24px;
  }
}


@media only screen and (max-width: 1052px) {
  .hero {
    &__title {
      padding: 0 50px;
      flex-direction: column;
      align-items: start;
    }
  }
}



@media only screen and (max-width: 705px) {
  .hero {
    &__title {
      font-size: 32px;
    }
  }
}


@media only screen and (max-width: 440px) {
  .hero {
    &__title {
      padding: 0 20px;
      font-size: 24px;
    }
  }
}
</style>