<template>
  <v-card
    class="review-card mx-auto"
    :title="name"
    width="80%"
    :subtitle="field"
    :prepend-icon="!headerStore.isMobile ? 'mdi-star' : ''"
  >
    <!-- stars row -->
    <v-row
      v-if="!headerStore.isMobile"
      style="gap: 4px; padding-left: 80px; padding-top: 4px;"
    >
      <v-icon
        v-for="i in stars"
        color="orange"
      >mdi-star</v-icon>
    </v-row>
    <!-- description -->
    <v-card-text
      class="review-card__text"
      style="font-size: 18px; padding-top: 24px; line-height: normal;"
    >{{ description }}</v-card-text>

    <!-- append icon -->
    <template
      v-if="!headerStore.isMobile"
      v-slot:append
    >
      <v-icon
        icon="mdi-check"
        color="success"
      ></v-icon>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/HeaderStore';
import { toRefs } from 'vue';

const headerStore = useHeaderStore()

export type Review = {
  id: number
  name: string
  field: string
  stars: number
  description: string
}


const props = defineProps<{
  review: Review
}>()

const { description, field, name, stars } = toRefs(props.review)

</script>

<style lang="scss" scoped>
.review-card {
  margin: 20px 0;
}

@media only screen and (max-width: 400px) {
  .review-card {
    &__text {
      font-size: 12px !important;
    }
  }
}
</style>