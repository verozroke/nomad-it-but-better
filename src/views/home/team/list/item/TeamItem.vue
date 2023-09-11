<template>
  <div class="item hidden">
    <div class="item__card">
      <div class="item__image">
        <img :src="src" alt="">
      </div>
      <div class="item__name">
        {{ name }}
      </div>
    </div>
    <div class="item__title">
      {{ occupation }}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  name: String,
  occupation: String,
  src: String,
})


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
  let itemElements = document.querySelectorAll('.item.hidden')

  let hiddenElements = [
    ...itemElements,
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)

</script>

<style lang="scss" scoped>
.item {
  width: 304px;
  display: flex;
  flex-direction: column;

  &.hidden {
    opacity: 0;
    transition: all .7s;
    filter: blur(20px);
    transform: translateY(200px);
  }

  &.show {
    filter: blur(0);
    opacity: 1;
    transform: translateX(0);
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    padding: 30px 40px 10px 40px;
    width: 100%;
    height: 320px;
    border-radius: 30px;
    // border: 2px solid #000;
  }

  &__name {
    color: #000;
    z-index: 1;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__title {

    color: #494949;
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__image {
    width: 100%;
    height: 250px;

    & img {
      z-index: 999;
      border-radius: 26px;
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
}
</style>