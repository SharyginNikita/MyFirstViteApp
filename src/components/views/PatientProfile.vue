<template>
  <main class="PatientProfile main">
    <div class="main__wrapper main__wrapper_height-auto">
      <div class="main__head">
        <div class="main__head-left">
          <router-link
            to="/"
            class="main__head-back material-icons"
          >
            arrow_back
          </router-link>
          <h1 class="title">
            Профиль пациента
          </h1>
        </div>

        <router-link
          to="/graph"
          class="button button_small"
        >
          График ношения
        </router-link>
      </div>
      <div class="PatientProfile__wrapper">
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
            for="dateBirth"
            class="inputBlock__label"
          >Дата рождения*</label>
          <div class="inputWrapper">
            <input
              id="dateBirth"
              v-model="dateBirth"
              class="input"
              type="text"
            >
          </div>
        </div>

        <div class="inputBlock">
          <label
            for="recommendedTime"
            class="inputBlock__label"
          >Рекомендованное кол-во часов</label>
          <div class="inputWrapper">
            <input
              id="recommendedTime"
              v-model="recommendedTime"
              class="input"
              type="text"
            >
          </div>
        </div>
      </div>

      <div class="inputBlock">
        <label
          for="comment"
          class="inputBlock__label"
        >Комментарий</label>
        <div class="inputWrapper">
          <textarea
            id="comment"
            v-model="comment"
            class="input"
          />
        </div>
      </div>
      <button
        class="button button_small"
        @click="onSaveDoctorBtnClick"
      >
        Сохранить
      </button>
    </div>
  </main>
</template>

<script>
import { getPatientGQL } from "@/graphql/queries";
import { updatePatientGQL } from "@/graphql/mutation";
export default {
    data() {
        return {
            firstName: "",
            secondName: "",
            surName: "",
            dateBirth: "",
            recommendedTime: null,
            comment: "",
            doctorId: null,
        };
    },
    apollo: {
        patientData: {
            fetchPolicy: "network-only",
            query: getPatientGQL,
            variables() {
                return {
                    id: this.id,
                };
            },
            update(data) {
                return data;
            },
            result({ data }) {
                const patient = data.getPatient.patient;
                this.firstName = patient.firstName;
                this.secondName = patient.secondName;
                this.surName = patient.surName;
                this.dateBirth = patient.dateBirth;
                this.recommendedTime = patient.recommendedTime;
                this.comment = patient.comment;
                this.doctorId = patient.doctorId;
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
                mutation: updatePatientGQL,
                variables: {
                    id: this.id,
                    doctorId: this.doctorId,
                    firstName: this.firstName,
                    secondName: this.secondName,
                    surName: this.surName,
                    dateBirth: this.dateBirth,
                    comment: this.comment,
                    recommendedTime: this.recommendedTime,
                },
            });
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/variables.scss";

.PatientProfile {
    &__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 18px 12px;
        width: 100%;

        @media screen and (max-width: $widthTablet) {
            grid-template-columns: 1fr;
            gap: 8px;
        }
    }
}
</style>
