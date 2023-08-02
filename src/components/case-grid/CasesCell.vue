<template>
  <div class="block">
    <div class="block-overlay">
      <div class="overlay-title">Проект "Зарина Иди Нахуй со своим фараоном"</div>
      <a href="#" target="_blank"><v-btn variant="outlined" class="overlay-button">Перейти в пизду</v-btn></a>
    </div>
    <img :src="`/gallery/${src}`" alt="Gallery Photo" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: String
})
</script>

<style lang="scss" scoped>
.block {
  width: 50%;
  height: 50vw;
  max-width: 50%;
  position: relative;



  &:hover {
    .block-overlay {
      opacity: 1;
      transition: .4s;
    }

  }

  &-overlay {
    flex-direction: column;
    gap: 1em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    font-weight: 400;
    opacity: 0;
    position: absolute;
    transition: .4s;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-position: center;
    object-fit: cover;
    transition: 0.4s;
  }
}

a {
  color: #fff !important;
}


@media only screen and (max-width: 750px) {
  .block {
    width: 100%;
    max-width: 100%;

    & img {
      filter: brightness(100%);
      transform: scale(1);
      transition: 0.4s;
    }
  }
}
</style>
