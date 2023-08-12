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

</script>

<template>
  <div id="Home">
    <img id="circle-1" src="/shapes/circle.png" alt="">
    <img id="ring-1" src="/shapes/ring.png" alt="">
    <img id="ratatui-1" src="/shapes/ratatui.png" alt="">
    <img id="circle-2" src="/shapes/circle.png" alt="">
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
  top: 300px;
  left: -250px;
  z-index: 999;
}


#circle-2 {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 1200px;
  transform: rotate(-45deg);
  right: -320px;
  z-index: 999;
}



#ring-1 {
  position: absolute;
  width: 300px;
  height: 300px;
  top: -100px;
  right: -75px;
  z-index: 999;
}

#ratatui-1 {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 370px;
  right: -200px;
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
