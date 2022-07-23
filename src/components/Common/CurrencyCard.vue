<script setup>
import { computed, onMounted, reactive } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from 'chart.js';

Chart.register(PointElement, LineElement, CategoryScale, Filler, LinearScale);

const props = defineProps({ data: Array, title: String });

const chartData = reactive({
  labels: props.data,
  datasets: [{ data: props.data }],
});

const graph = computed(() => {
  const first = props.data.at(0);
  const last = props.data.at(-1);
  const difference = first - last;
  const percentage = (difference / first) * 100;
  return {
    color:
      percentage > 0 ? 'rgba(62, 105, 88, 0.35  )' : 'rgba(176, 58, 72, 0.35)',
    fill:
      percentage > 0 ? 'rgba(62, 105, 88, 0.25)' : 'rgba(176, 58, 72, 0.25)',
    percentage,
  };
});

const chartOptions = reactive({
  borderCapStyle: 'round',
  responsive: true,
  borderColor: graph.value.color,
  backgroundColor: graph.value.fill,
  borderWidth: 2,
  borderJoinStyle: 'round',
  fill: true,
  maintainAspectRatio: false,
  cubicInterpolationMode: 'monotone',
  elements: { point: { radius: 0 } },
  scales: {
    x: {
      ticks: { display: false },
      grid: { display: false, drawBorder: false },
    },
    y: {
      suggestedMax: Math.max(...props.data) * 1.05,
      ticks: { display: false },
      grid: { display: false, drawBorder: false },
    },
  },
});
</script>

<template>
  <div
    class="relative flex flex-col justify-center items-center p-0 m-0 overflow-hidden"
  >
    <span>{{ props.title }}</span>
    <span>{{ `${props.data.at(-1)} ₴` }}</span>
    <span
      class="flex gap-0.5"
      :class="[graph.percentage > 0 ? '!text-main-su' : '!text-main-er']"
    >
      <span class="text-inherit">{{ `${graph.percentage.toFixed(2)}%` }}</span>
      <span aria-hidden="true" class="scale-75 text-inherit">{{
        graph.percentage > 0 ? '▲' : '▼'
      }}</span>
    </span>
    <Line
      class="absolute -inset-2 -z-10"
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
  </div>
</template>
