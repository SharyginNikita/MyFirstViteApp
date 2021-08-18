<template>
  <main class="DoctorCreate main">
    <div
      class="main__wrapper main__wrapper_height-auto main__wrapper_small"
    >
      <div class="main__head">
        <div class="main__head-left">
          <router-link
            to="/admin"
            class="main__head-back material-icons"
          >
            arrow_back
          </router-link>
          <h1 class="title">
            Создание врача
          </h1>
        </div>
      </div>
      <div class="DoctorProfile__wrapper">
        <div class="inputBlock">
          <label
            for="secondName"
            class="inputBlock__label"
          >Фамилия*</label>
          <div class="inputWrapper">
            <input
              id="secondName"
              v-model="secondName"
              class="input"
              type="text"
            >
          </div>
        </div>
        <div class="inputBlock">
          <label
            for="firstName"
            class="inputBlock__label"
          >Имя*</label>
          <div class="inputWrapper">
            <input
              id="firstName"
              v-model="firstName"
              class="input"
              type="text"
            >
          </div>
        </div>
        <div class="inputBlock">
          <label
            for="surName"
            class="inputBlock__label"
          >Отчество</label>
          <div class="inputWrapper">
            <input
              id="surName"
              v-model="surName"
              class="input"
              type="text"
            >
          </div>
        </div>
        <div class="inputBlock">
          <label
            for="login"
            class="inputBlock__label"
          >Email (логин)*</label>
          <div class="inputWrapper">
            <input
              id="login"
              v-model="login"
              class="input"
              type="email"
            >
          </div>
        </div>
        <div class="inputBlock">
          <label
            for="password"
            class="inputBlock__label"
          >Пароль*</label>
          <div class="inputWrapper">
            <input
              id="password"
              v-model="password"
              class="input"
              type="password"
            >
          </div>
        </div>
        <div class="inputBlock">
          <label
            for="passwordRepeat"
            class="inputBlock__label"
          >Повтор пароля*</label>
          <div class="inputWrapper">
            <input
              id="passwordRepeat"
              v-model="passwordRepeat"
              class="input"
              type="password"
            >
          </div>
        </div>

        <button
          class="button button_small"
          @click="onCreateDoctorBtnClick"
        >
          Добавить
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { createDoctorGQL } from "@/graphql/mutation";
export default {
    data() {
        return {
            data() {
                return {
                    firstName: "",
                    secondName: "",
                    surName: "",
                    login: "",
                    password: "",
                    passwordRepeat: "",
                };
            },
        };
    },
    methods: {
        onCreateDoctorBtnClick() {
            this.$apollo.mutate({
                mutation: createDoctorGQL,
                variables: {
                    login: this.login,
                    password: this.password,
                    firstName: this.firstName,
                    secondName: this.secondName,
                    surName: this.surName,
                },
            });
        },
    },
};
</script>

<style lang="scss">
.DoctorCreate {
    &__wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        > * {
            margin-bottom: 15px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
