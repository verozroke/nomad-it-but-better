<template>
  <div class="team">
    <div class="team__container">
      <div class="team__title hidden">Команда</div>
      <TeamList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TeamList from './list/TeamList.vue'


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
  let titleElements = document.querySelectorAll('.team__title.hidden')

  let hiddenElements = [
    ...titleElements,
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)

</script>

<style lang="scss" scoped>
.team {
  padding: 40px 0;
  background-color: #fff;

  &__title {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 50px;
    font-style: normal;
    text-align: center;
    font-weight: 700;
    line-height: normal;
    z-index: 1;

    &.hidden {
      opacity: 0;
      transition: all 1s;
      filter: blur(20px);
      transform: translateY(-100px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
}
</style>