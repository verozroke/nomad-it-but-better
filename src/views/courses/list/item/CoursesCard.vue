<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>

    <div class="card__box">
      <div class="card__banner">
        <img :src="bannerSrc" alt="">
      </div>
      <div class="card__info">
        <!-- <div class="card__old-price"><span style="color: #000;">{{ oldPrice }} тенге</span></div> -->
        <!-- <div class="card__price">{{ price }} тенге</div> -->
        <div class="card__tunnel">
          <div class="card__duration">

            <v-icon>mdi-clock-time-two-outline</v-icon>
            <div>{{ duration }}</div>
          </div>
          <div class="card__difficulty">

            <v-icon>mdi-alpha</v-icon>
            <div>{{ difficulty }}</div>
          </div>
        </div>
        <div class="card__plan-box">
          <div class="card__plan-title">Содержание:</div>
          <v-btn class="card__plan text-white" style="font-weight: 800;" @click="download(planSrc as string)"
            color="#088af9" prepend-icon="mdi-text-box">Скачать план
            курса</v-btn>
        </div>
        <div class="card__button-row">
          <a :href="formsLink"><v-btn prepend-icon="mdi-file-document-edit" color="#fff"
              class="text-black">Записаться</v-btn></a>
          <a :href="whatsappLink"><v-btn color="#25D366" class="text-white" prepend-icon="mdi-whatsapp">Написать в
              whatsapp</v-btn></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  price: String,
  oldPrice: String,
  duration: String,
  difficulty: String,
  bannerSrc: String,
  planSrc: String,
  formsLink: String,
  whatsappLink: String

})


const download = (src: string) => {
  const link = document.createElement('a')
  console.log(src);

  link.setAttribute('href', src)
  link.download = 'Программа мастер-класса HTML & CSS 5-6 августа.pdf'

  link.click()
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 40px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: #fff;
  filter: drop-shadow(.1em 0 .4em #00000048);

  &__title {
    width: 100%;
    text-align: left;
    font-family: 'Exo 2', sans-serif;
    font-size: 100px;
    color: #000;
    margin-bottom: 80px;
  }

  &__box {
    width: 100%;
    display: flex;
    gap: 2em;
    justify-content: space-between;
  }

  &__banner {
    height: 400px;
    width: 50%;
    border-radius: 20px;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  &__old-price {
    width: 100%;
    text-align: left;

    font-family: 'Exo 2', sans-serif;

    font-size: 35px;
    letter-spacing: 1px;
    color: rgb(210, 85, 85);
    text-decoration: line-through;
  }

  &__price {
    width: 100%;
    text-align: left;
    font-family: 'Exo 2', sans-serif;

    font-size: 70px;
    letter-spacing: 1px;
    color: #000;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__tunnel {
    border-radius: 40px;
    padding: 10px 0;
    display: flex;
    filter: drop-shadow(.1em 0 .4em #00000048);
    background: #fff;
    border: 2px solid #7d7d7d;
    color: #000;
    margin-bottom: 40px;
  }

  &__duration {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1em;
    font-family: 'Exo 2', sans-serif;
    font-size: 20px;
    font-weight: 700;
    border-right: 1px solid #000;
  }

  &__difficulty {
    font-size: 20px;
    border-left: 1px solid #000;
    width: 50%;
    font-family: 'Exo 2', sans-serif;

    gap: 1em;
    font-weight: 700;
    justify-content: center;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__plan-box {
    display: flex;
    width: 100%;
    text-align: left;
    font-family: 'Exo 2', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    color: #000;
    gap: 1em;
    font-weight: 700;
    margin-bottom: 20px;
    flex-direction: column;
  }

  &__button-row {
    display: flex;
    width: 100%;
    font-family: 'Exo 2', sans-serif;
    justify-content: space-between;
  }
}

@media only screen and (max-width: 1260px) {
  .card {
    &__title {
      text-align: center;
    }

    &__box {
      flex-direction: column;
      gap: 2em;
    }

    &__banner {
      width: 100%;
      gap: 100px;
    }

    &__info {
      width: 100%;
    }

    &__button-row {
      justify-content: center;
      gap: 2em;
    }
  }
}

@media only screen and (max-width: 730px) {
  .card {
    &__title {
      font-size: 50px;
    }

    &__price {
      font-size: 35px;
    }

    &__old-price {
      font-size: 24px;

    }

    &__difficulty {
      font-size: 14px;
      border-left: none !important;
      border-top: 1px solid #000;
      padding-top: 10px;
    }

    &__duration {
      font-size: 14px;
      border-right: none !important;
      border-bottom: 1px solid #000;
      padding-bottom: 10px;
    }

    &__plan-box {
      font-size: 14px;
    }

    &__tunnel {
      flex-direction: column;
      align-items: center;


    }

    &__banner {
      width: 100%;

      & img {
        height: 100%;
      }
    }
  }

  .text-white {
    font-size: 10px !important;
  }
}

@media only screen and (max-width: 450px) {
  .card {
    width: 300px;

    &__title {
      font-size: 35px;
    }

    &__price {
      font-size: 24px;
    }

    &__old-price {
      font-size: 16px;

    }

    &__difficulty {
      font-size: 10px;
    }

    &__tunnel {
      filter: none;

    }

    &__banner {
      height: 100px;
    }

    &__duration {
      font-size: 10px;
    }

    &__button-row {
      flex-direction: column;

    }
  }

  .text-white {
    width: 100%;
  }
}
</style>