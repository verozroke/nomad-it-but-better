<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import Footer from "@/components/footer/Footer.vue";
import HeaderVue from "@/components/header/HeaderVue.vue";
import { useHeaderStore } from "./stores/HeaderStore";
import ContactButton from "./components/ContactButton.vue";

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
  <div>
    <header-vue />
    <ContactButton />
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
  </div>
</template>

<style lang="scss">
.main {
  flex: 1 1 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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


.routering {
  &-enter-from {
    opacity: 0;
    transform: translateX(1000px);
  }

  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(-1000px);
  }

  &-leave-active {
    transition: all 0.3s ease-in;
  }
}
</style>
