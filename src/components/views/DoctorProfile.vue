<template>
  <main class="DoctorProfile main">
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
            Профиль врача
          </h1>
        </div>
        <div class="main__head-delete">
          Удалить врача
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
        <router-link
          :to="{
            name: 'passwordChange',
            params: { id },
          }"
          class="button"
        >
          Сменить пароль
        </router-link>

        <button
          class="button button_small"
          @click="onSaveDoctorBtnClick"
        >
          Сохранить
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { getDoctorGQL } from "@/graphql/queries";
import { updateDoctorGQL } from "@/graphql/mutation";
export default {
    data() {
        return {
            firstName: "",
            secondName: "",
            surName: "",
            login: "",
        };
    },
    apollo: {
        doctorData: {
            fetchPolicy: "network-only",
            query: getDoctorGQL,
            variables() {
                return {
                    id: this.id,
                };
            },
            update(data) {
                return data;
            },
            result({ data: { getDoctor } }) {
                const doctor = getDoctor.doctor;

                this.firstName = doctor.firstName;
                this.secondName = doctor.secondName;
                this.surName = doctor.surName;
                this.login = doctor.login;
            },
            skip() {
                return isNaN(this.id);
            },
        },
    },
    computed: {
        id() {
            return Number(this.$route.params.id);
        },
    },
    methods: {
        onSaveDoctorBtnClick() {
            this.$apollo.mutate({
                mutation: updateDoctorGQL,
                variables: {
                    id: this.id,
                    login: this.login,
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
.DoctorProfile {
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
