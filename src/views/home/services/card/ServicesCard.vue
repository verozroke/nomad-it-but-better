<template>
  <div class="card hidden">
    <ServicesItem :page-name="item.pageName" v-for="item in items" :key="item.id" :card-number="item.id"
      :service-name="item.key" :imgSrc="item.imgSrc" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServicesItem from './item/ServicesItem.vue'


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
  let cardElements = document.querySelectorAll('.card.hidden')

  let hiddenElements = [
    ...cardElements,
  ]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)

const items = ref([
  {
    id: 1,
    key: 'DEV',
    imgSrc: 'https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=2000',
    pageName: 'CasesDev'
  },
  {
    id: 2,
    key: 'DESIGN',
    imgSrc: '/card2.jpg',
    pageName: 'CasesDesign'

  },
  {
    id: 3,
    key: 'SMM',
    imgSrc: 'https://assets-global.website-files.com/6294b12fe96345a83876d4a5/62dabd4a70b55418330fa1b3_smm-manager-h.png',
    pageName: 'CasesDesign'

  },
])


</script>

<style lang="scss" scoped>
.card {
  padding: 36px 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-radius: 30px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px #000000a0);

  &.hidden {
    opacity: 0;
    transition: all 1s;
    // filter: blur(20px);
    transform: translateX(-300px);
  }

  &.show {
    // filter: blur(0);
    opacity: 1;
    transform: translateX(0);
  }
}


@media only screen and (max-width: 920px) {
  .card {
    flex-direction: column;
    width: 90%;
  }
}
</style>