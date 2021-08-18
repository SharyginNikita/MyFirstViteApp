<template>
  <div class="AuthPage">
    <div class="AuthPage__container">
      <img
        src="@/assets/img/logoAuth.svg"
        alt="logo"
      >
      <div class="AuthPage__wrapper">
        <div class="inputBlock">
          <label
            for="username"
            class="inputBlock__label"
          >Логин</label>
          <div class="inputWrapper">
            <input
              id="username"
              v-model="username"
              class="input"
              type="text"
            >
          </div>
        </div>
        <div class="inputBlock">
          <label
            for="password"
            class="inputBlock__label"
          >Пароль</label>
          <div class="inputWrapper">
            <input
              id="password"
              v-model="password"
              class="input"
              type="password"
            >
          </div>
        </div>
      </div>
      <button
        class="button button_auth"
        @click="onLoginButtonClick"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<script>
import { loginGQL } from "@/graphql/mutation.js";
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    created() {
        this.$apollo.mutate({
            mutation: loginGQL,
        });
    },
    methods: {
        async onLoginButtonClick() {
            const base64 = window.btoa(
                unescape(
                    encodeURIComponent(`${this.username}:${this.password}`)
                )
            );
            localStorage.setItem("basic", base64);
            const { data } = await this.$apollo.mutate({
                mutation: loginGQL,
            });
            if (data.login) {
                this.$router.replace({ path: "/" });
            }
        },
    },
};
</script>
<style lang="scss">
.AuthPage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: white;

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 264px;
        padding: 10px;

        > * {
            margin-bottom: 35px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
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
