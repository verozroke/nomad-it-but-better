<template>
  <v-dialog
    class="dialog"
    v-model="dialog"
    width="auto"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        size="large"
        rounded="xl"
        class="medias-button"
        style="color: #fff;"
        color="#25D366"
        prepend-icon="mdi-whatsapp"
      >написать</v-btn>
    </template>

    <v-card class="card">
      <div
        class="card-title"
        style="font-weight: 700; margin-bottom: 20px;"
      >Связаться с нами</div>
      <a
        target="_blank"
        href="https://www.instagram.com/cnomad_/"
        style="width: 100%;"
      >
        <v-btn
          size="large"
          rounded="lg"
          prepend-icon="mdi-instagram"
          color="#E1306C"
          class="text-white"
          stacked
        >
          Написать в Instagram
        </v-btn>
      </a>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=77053505988"
        style="width: 100%;"
      >
        <v-btn
          size="large"
          rounded="lg"
          prepend-icon="mdi-whatsapp"
          color="#25D366"
          class="text-white"
          stacked
        >
          Написать в Whatsapp
        </v-btn>
      </a>
      <a
        target="_blank"
        href="https://t.me/ibrahimov088"
        style="width: 100%;"
      >
        <v-btn
          size="large"
          rounded="lg"
          color="#0088cc"
          class="text-white"
          stacked
        >
          Написать в Telegram
        </v-btn>
      </a>

      <v-card-actions>
        <v-btn
          color="black"
          @click="dialog = false"
        >Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialog = ref(false)



</script>

<style lang="scss" scoped>
.medias-button {
  position: fixed;
  font-size: 16px;
  bottom: 15px;
  right: 15px;
  z-index: 10000000;
}



.card {
  font-family: 'Exo 2', sans-serif;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 0 20px;
  width: 500px;

  &-title {
    font-size: 40px;
  }
}

.text-white {
  width: 100%;
}


@media only screen and (max-width: 600px) {
  .card {
    width: 100%;

    &-title {
      font-size: 24px;
      text-align: center;
    }
  }

  .dialog {
    width: 90%;
  }

  .text-white {
    font-size: 12px !important;
  }
}
</style>