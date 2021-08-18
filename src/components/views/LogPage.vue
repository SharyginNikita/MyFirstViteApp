<template>
  <main class="LogPage main">
    <div class="main__wrapper">
      <div class="LogPage__wrapper">
        <div
          class="inputWrapper"
          style="max-width: 275px; margin-bottom: 10px"
        >
          <span class="material-icons material-icons_gray">
            date_range
          </span>
          <input
            id="dateFrom"
            class="input"
            type="text"
            placeholder="Выбор даты"
          >
        </div>

        <table class="table table_log">
          <thead class="table__thead">
            <th class="table__th">
              Дата
            </th>
            <th class="table__th">
              Время
            </th>
            <th class="table__th">
              Тип пользователя
            </th>
            <th class="table__th">
              ФИО
            </th>
            <th class="table__th">
              Платформа
            </th>
            <th class="table__th">
              Событие
            </th>
          </thead>
          <tbody>
            <tr
              v-for="item in 7"
              :key="item"
              class="table__tr"
            >
              <td class="table__td">
                01.01.2020
              </td>
              <td class="table__td">
                15:00
              </td>
              <td class="table__td">
                Врач
              </td>
              <td class="table__td">
                Иванов Иван Иванович
              </td>
              <td class="table__td">
                Mobile
              </td>
              <td class="table__td">
                Загрузка данных с датчика ID: 54321
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.LogPage {
}
</style>
