<script setup lang="ts">
import HomeHero from './hero/HomeHero.vue'
import HomeTeam from './team/HomeTeam.vue'
import HomeServices from './services/HomeServices.vue'
import HomeAbout from './about-us/HomeAbout.vue'
import HomeStages from './stages/HomeStages.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
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
  let circle1Elements = document.querySelectorAll('#circle-1.hidden')
  let circle2Elements = document.querySelectorAll('#circle-2.hidden')
  let ratatui1Elements = document.querySelectorAll('#ratatui-1.hidden')

  let hiddenElements = [
    ...circle1Elements,
    ...circle2Elements,
    ...ratatui1Elements
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)



</script>

<template>
  <div id="Home">
    <img id="circle-1" class="hidden" src="/shapes/circle.png" alt="">
    <!-- <img id="ring-1" src="/shapes/ring.png" alt=""> -->
    <img id="ratatui-1" class="hidden" src="/shapes/ratatui.png" alt="">
    <img id="circle-2" class="hidden" src="/shapes/circle.png" alt="">
    <HomeHero />
    <HomeServices />
    <HomeTeam />
    <HomeAbout />
    <HomeStages />
  </div>
</template>


<style lang="scss" scoped>
#circle-1 {
  position: absolute;
  width: 500px;
  height: 500px;
  transition: .5s;
  top: 300px;
  left: -250px;

  &.hidden {
    opacity: 0;
    transition: all 1.5s;
    filter: blur(20px);
    transform: translateX(-100px);
  }

  &.show {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0%);
  }

  z-index: 999;
}


#circle-2 {
  transition: .5s;
  position: absolute;
  width: 500px;
  height: 500px;
  top: 1200px;
  transform: rotate(-45deg);
  right: -320px;
  z-index: 999;

  &.hidden {
    opacity: 0;
    transition: all 1.5s;
    filter: blur(20px);
    transform: translateY(-100px);
  }

  &.show {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0%);
  }
}



#ring-1 {
  transition: .5s;

  position: absolute;
  width: 300px;
  height: 300px;
  top: -100px;

  &.hidden {
    opacity: 0;
    transition: all 1.5s;
    filter: blur(20px);
    transform: translateY(-100px);
  }

  &.show {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0%);
  }

  right: -75px;
  z-index: 999;
}

#ratatui-1 {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 370px;
  right: -200px;

  &.hidden {
    opacity: 0;
    transition: all 1.5s;
    filter: blur(20px);
    transform: translateX(100px);
  }

  &.show {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0%);
  }

  transition: .5s;

  z-index: 999;
}


@media only screen and (max-width: 1105px) {

  #circle-1,
  #circle-2,
  #ring-1,
  #ratatui-1 {
    display: none;
  }
}
</style>
