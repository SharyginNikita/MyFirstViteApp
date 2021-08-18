<template>
  <main class="PasswordChange main">
    <div
      class="main__wrapper main__wrapper_height-auto main__wrapper_small"
    >
      <div class="main__head">
        <div class="main__head-left">
          <router-link
            :to="{
              name: 'doctorProfile',
              params: {
                id: id,
              },
            }"
            class="main__head-back material-icons"
          >
            arrow_back
          </router-link>
          <h1 class="title">
            Смена пароля
          </h1>
        </div>
      </div>
      <div class="PasswordChange__wrapper">
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
          @click="onPasswordChangeBtnClick"
        >
          Сохранить
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { changePasswordGQL } from "@/graphql/mutation.js";
export default {
    data() {
        return {
            password: "",
            passwordRepeat: "",
        };
    },
    computed: {
        id() {
            return Number(this.$route.params.id);
        },
    },
    methods: {
        onPasswordChangeBtnClick() {
            this.$apollo.mutate({
                mutation: changePasswordGQL,
                variables: {
                    id: this.id,
                    password: this.password,
                },
            });
        },
    },
};
</script>

<style lang="scss">
.PasswordChange {
    &__wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        > * {
            margin-bottom: 11px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
