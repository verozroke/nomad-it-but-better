<template>
  <div class="footer">
    <div class="footer__body">
      <div class="footer__column">
        <div class="footer__name">NOMAD it</div>
        <div class="footer__date">© 2023 Nomad it.</div>
        <div class="footer__copy">
          Все права защищены. Копирование контента/дизайна преследуется по
          закону.
        </div>
        <div class="footer__social">
          <div class="footer__link">
            <a
              href="https://api.whatsapp.com/send/?phone=77053505988"
              target="_blank"
            >
              <img src="/icons/whats-app.svg" alt="whats-app" />
            </a>
          </div>
          <div class="footer__link">
            <a href="https://www.instagram.com/nomads_1t/" target="_blank">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer__column">
        <div class="footer__title">Карта сайта</div>
        <ul class="footer__list">
          <li v-for="item in navItems" :key="item.title" class="footer__item">
            <router-link :to="item.to">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="footer__column footer__right">
        <div class="footer__row">
          <div class="footer__title">Дополнительно</div>
          <ul class="footer__list">
            <li
              v-for="item in additionallyItems"
              :key="item.title"
              class="footer__item"
            >
              <router-link :to="item.to">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__row">
          <div class="footer__title">Телефон:</div>
          <a href="tel:87771234567" class="footer__phone">+7 777 123 45 67</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface NavItem {
  title: string;
  to: string;
}

const navItems: NavItem[] = [
  { title: "Главная", to: "/" },
  { title: "О нас", to: "about-us" },
  { title: "Услуги", to: "" },
  { title: "Отзывы", to: "" },
  { title: "Команда", to: "" },
  { title: "Процесс работы", to: "" },
];

const additionallyItems: NavItem[] = [
  { title: "Публичная офферта", to: "" },
  { title: "Политика конфиденциальности", to: "" },
];
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/footer.scss";
</style>
