<script setup>
// import DashboardGrid from '../Common/DashboardGrid.vue';
// import { currency } from '../utils/constants';
import { reactive } from 'vue';
import WeatherCard from '../Common/WeatherCard.vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(Title, PointElement, LineElement, CategoryScale, LinearScale);

const chartData = reactive({
  labels: ['January', 'February', 'March'],
  datasets: [{ data: [40, 20, 12] }],
});
const chartOptions = reactive({
  borderCapStyle: 'round',
  responsive: true,
  // borderColor: '#3e6958',
  borderColor: '#b03a48',
  borderWidth: 2,
  borderJoinStyle: 'round',
  fill: 'origin',
  maintainAspectRatio: false,
  cubicInterpolationMode: 'monotone',
  elements: { point: { radius: 0 } },
  scales: {
    xAxes: {
      grid: { display: false, drawBorder: false },
      ticks: { display: false },
    },
    yAxes: {
      grid: { display: false, drawBorder: false },
      ticks: { display: false },
    },
  },
});
</script>

<template>
  <div class="flex items-center relative select-none mx-auto mt-6 sm:mt-14">
    <div class="text-center text-2xl sm:text-5xl">
      40 років незалежності України!
    </div>
  </div>
  <div
    class="border-solid box-content border-b-4 border-main-fg sm:mt-10 py-1 flex flex-col"
  >
    <div class="sm:text-lg mx-auto">Понеділок, 24 серпня 2031 р.</div>
    <div
      class="border-solid border-b-2 border-main-fg flex justify-center w-full"
    >
      <WeatherCard />
      <span class="w-px border-x border-main-fg my-5"></span>

      <Line
        :chart-options="chartOptions"
        :chart-data="chartData"
        style="width: calc(50% - 1px)"
      />
      <!-- <DashboardGrid>{{ currency }}</DashboardGrid> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
