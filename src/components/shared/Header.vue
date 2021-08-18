<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left">
        <router-link
          to="/"
          class="header-logo"
        >
          <img
            src="@/assets/img/logo.svg"
            alt="logo"
          >
        </router-link>
        <nav class="header-nav">
          <router-link
            to="/"
            class="header-nav__item"
            active-class="header-nav__item_active"
          >
            Пациенты
          </router-link>
          <router-link
            to="/admin"
            class="header-nav__item"
            active-class="header-nav__item_active"
          >
            Панель администратора
          </router-link>
          <router-link
            to="/log"
            class="header-nav__item"
            active-class="header-nav__item_active"
          >
            Логи
          </router-link>
        </nav>
      </div>
      <router-link
        to="/auth"
        class="header__auth"
      >
        <span
          class="
                        material-icons-outlined material-icons-outlined_white
                    "
        >
          person
        </span>
      </router-link>
    </div>
  </header>
</template>
