<template>
  <main class="DoctorList main">
    <div class="main__wrapper">
      <h1 class="title">
        Список врачей
      </h1>
      <div class="inputWrapper">
        <span class="material-icons material-icons_gray"> search </span>
        <input
          type="text"
          class="input"
          placeholder="Поиск врача"
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
          <th />
        </thead>
        <tbody>
          <tr
            v-for="item in doctors"
            :key="item.id"
            class="table__tr"
          >
            <td class="table__td">
              {{ item.secondName }} {{ item.firstName }}
              {{ item.surName }}
            </td>
            <td class="table__td">
              01.01.2020
            </td>
            <td class="table__td">
              <router-link
                :to="{
                  name: 'doctorProfile',
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
        to="/admin/create"
        class="button button_small"
      >
        Добавить врача
      </router-link>
    </div>
  </main>
</template>

<script>
import { getDoctorsGQL } from "@/graphql/queries.js";
export default {
    apollo: {
        doctorsData: {
            fetchPolicy: "network-only",
            query: getDoctorsGQL,
            variables() {
                return {
                    limit: 10,
                    offset: 0,
                };
            },
            update(data) {
                return data.getDoctors;
            },
        },
    },
    computed: {
        doctors() {
            if (this.doctorsData) {
                return this.doctorsData.doctors;
            }
            return [];
        },
    },
};
</script>
