<template>
  <div>
    <div class="bruh" @click="headerStore.burger = true" style="position: relative;">
      <svg class="hover" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="#000">
        <g filter="url(#filter0_b_234_45)">
          <circle cx="27" cy="27" r="27" fill="#000" />
        </g>
        <rect x="15.525" y="18.36" width="25.515" height="2.835" rx="1.4175" fill="white" />
        <rect x="10.8" y="25.92" width="30.24" height="2.835" rx="1.4175" fill="white" />
        <rect x="15.525" y="33.48" width="25.515" height="2.835" rx="1.4175" fill="white" />
        <defs>
          <filter id="filter0_b_234_45" x="-15" y="-15" width="84" height="84" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_234_45" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_234_45" result="shape" />
          </filter>
        </defs>
      </svg>
      <svg style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; opacity: 1;" class="birdeme"
        xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
        <g filter="url(#filter0_b_234_45)">
          <circle cx="27" cy="27" r="27" fill="#000" />
        </g>
        <rect x="15.525" y="18.36" width="25.515" height="2.835" rx="1.4175" fill="white" />
        <rect x="10.8" y="25.92" width="30.24" height="2.835" rx="1.4175" fill="white" />
        <rect x="15.525" y="33.48" width="25.515" height="2.835" rx="1.4175" fill="white" />
        <defs>
          <filter id="filter0_b_234_45" x="-15" y="-15" width="84" height="84" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_234_45" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_234_45" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
    <v-dialog v-model="headerStore.burger" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar color="#000">
          <div class="toolbar">
            <v-btn icon="mdi-close" class="text-white" variant="text" @click="headerStore.burger = false"></v-btn>
          </div>
        </v-toolbar>
        <div class="body">
          <BurgerNavbar />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/HeaderStore';
import BurgerNavbar from './childs/BurgerNavbar.vue'

const headerStore = useHeaderStore()

</script>

<style scoped>
.hover {
  border-radius: 50%;
  z-index: 999;
  opacity: 0;
  transition: .3s;
}




.body {
  transition: 0.4s;
  padding: 0 40px;
  display: flex;
  height: 100%;
  width: 100%;
  gap: 2em;
  justify-content: center;
  flex-direction: column;
  background-color: #000;
}
</style>