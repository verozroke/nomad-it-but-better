<template>
  <div class="block">
    <div class="block-overlay">

      <div class="overlay-title">{{ title }}</div>
      <a
        href="#"
        target="_blank"
      ><v-btn
          variant="outlined"
          class="overlay-button"
        >Перейти</v-btn></a>
    </div>
    <img
      :src="src"
      alt="Gallery Photo"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({

  title: String,
  src: String
})
</script>

<style lang="scss" scoped>
.overlay-title {
  width: 50%;
  font-weight: 700;
  line-height: normal;
}

.block {
  width: 50%;
  height: 50vw;
  max-width: 50%;
  position: relative;

  &-overlay {
    flex-direction: column;
    gap: 1em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
    font-weight: 400;
    position: absolute;
    transition: 0.4s;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & img {
    width: 100%;
    height: 100%;
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
    height: 100vw;
  }
}

@media only screen and (max-width: 436px) {
  .block {
    &-overlay {
      padding: 0 40px;
      font-size: 16px;
    }
  }
}
</style>
