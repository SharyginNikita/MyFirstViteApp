<template>
  <main class="PatientList main">
    <div class="main__wrapper">
      <h1 class="title">
        Список пациентов
      </h1>
      <div class="inputWrapper">
        <span class="material-icons material-icons_gray"> search </span>
        <input
          type="text"
          class="input input_gray"
          placeholder="Поиск пациентов"
        >
      </div>
      <table class="table">
        <thead class="table__thead">
          <th class="table__th">
            ФИО
          </th>
          <th class="table__th">
            Дата рождения
          </th>
          <th class="table__th">
            Врач
          </th>
          <th />
        </thead>
        <tbody>
          <tr
            v-for="item in patients"
            :key="item.id"
            class="table__tr"
          >
            <td class="table__td">
              {{ item.secondName }} {{ item.firstName }}
              {{ item.surName }}
            </td>
            <td class="table__td">
              {{ item.dateBirth }}
            </td>
            <td class="table__td">
              {{ item.doctorId }}
            </td>
            <td class="table__td">
              <router-link
                :to="{
                  name: 'patientProfile',
                  params: {
                    id: item.id,
                  },
                }"
                class="button button_table"
              >
                Профиль
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link
        to="/profile"
        class="button button_small"
      >
        Добавить пациента
      </router-link>
    </div>
  </main>
</template>

<script>
import { getPatientsGQL } from "@/graphql/queries.js";
export default {
    apollo: {
        patientsData: {
            fetchPolicy: "network-only",
            query: getPatientsGQL,
            variables() {
                return {
                    limit: 10,
                    offset: 0,
                };
            },
            update(data) {
                return data.getPatients;
            },
        },
    },
    computed: {
        patients() {
            if (this.patientsData) {
                return this.patientsData.patients;
            }
            return [];
        },
    },
};
</script>
