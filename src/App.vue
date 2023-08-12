<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import Footer from "@/components/footer/Footer.vue";
import HeaderVue from "@/components/header/HeaderVue.vue";
import { useHeaderStore } from "./stores/HeaderStore";

const headerStore = useHeaderStore();

const onResize = () => {
  if (window.innerWidth < 980) {
    headerStore.isMobile = true;
  } else if (window.innerWidth >= 980) {
    headerStore.isMobile = false;
  }
};

onMounted(() => {
  onResize();
  nextTick(() => {
    window.addEventListener("resize", onResize);
  });
});
</script>

<template>
  <header-vue />
  <div class="wrapper">
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="routering" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.main {
  flex: 1 1 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
}

[class*="__container"] {
  max-width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  font-style: normal;
}
</style>
