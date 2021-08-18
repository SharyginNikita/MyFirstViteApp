<template>
  <main class="PatientGraph main">
    <div class="main__wrapper main__wrapper_wide">
      <div class="main__head">
        <div class="main__head-left">
          <router-link
            to="/"
            class="main__head-back material-icons"
          >
            arrow_back
          </router-link>
          <h1 class="title">
            График пациента Фамилия Имя Отчество
          </h1>
        </div>
      </div>
      <div class="PatientGraph__wrapper">
        <span
          class="PatientGraph__description"
        >Отображение графика</span>
        <div class="PatientGraph__options">
          <div class="inputBlock inputBlock_row">
            <label
              for="dateFrom"
              class="inputBlock__label"
            >От:</label>
            <div class="inputWrapper">
              <span class="material-icons material-icons_gray">
                date_range
              </span>
              <input
                id="dateFrom"
                class="input"
                type="text"
              >
            </div>
          </div>
          <div class="inputBlock inputBlock_row">
            <label
              for="dateFrom"
              class="inputBlock__label"
            >От:</label>
            <div class="inputWrapper">
              <span class="material-icons material-icons_gray">
                date_range
              </span>
              <input
                id="dateFrom"
                class="input"
                type="text"
              >
            </div>
          </div>
        </div>
        <VueApexCharts
          type="line"
          height="350"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </div>
  </main>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    name: "VueGraph",
    components: {
        VueApexCharts,
    },
    data() {
        return {
            series: [
                {
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "line",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            },
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/utils/variables.scss";
.PatientGraph {
    &__wrapper {
        display: flex;
        flex-direction: column;
    }
    &__description {
        margin-bottom: 20px;
        font: $fontThin;
    }
    &__options {
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 150px));
        gap: 18px;
    }
}
</style>
