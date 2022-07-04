<script setup>
import { weather } from '../utils/constants';
</script>

<template>
  <div
    class="flex items-center justify-center gap-5 p-10"
    style="width: calc(50% - 1px)"
  >
    <span class="text-2xl font-bold flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-28 w-28 animate-spin"
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        style="animation-duration: 10s"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <span class="font-normal" style="font-family: KyivRegion">
        <span class="flex">
          <span>{{ weather.temp.day }}</span>
          <span aria-label="Degrees celsius" class="opacity-70">&deg;</span>
          <span class="pl-0.5 pr-1">/</span>
          <span>{{ weather.temp.night }}</span>
          <span aria-label="Degrees celsius" class="opacity-70">&deg;</span>
        </span>
        <span class="capitalize mt-2"> {{ weather.description }} </span>
      </span>
    </span>
    <div class="flex flex-col items-start gap-2 ml-2">
      <div title="Humidity" class="flex gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 rotate-180"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
        </svg>
        <span class="py-1">
          <span class="sr-only">Humidity:</span>
          {{ weather.humidity }}%
        </span>
      </div>
      <div title="Wind speed" class="flex gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
        <span>
          <span class="sr-only">Wind speed:</span>
          <span class="flex items-center">
            {{ ~~(weather.wind_speed * 3.6) }}
            <span class="text-sm flex flex-col items-center ml-1">
              <span class="underline"> km </span>
              <span> h </span>
            </span>
          </span>
        </span>
      </div>
      <div title="Cloudiness" class="flex gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
        <span class="py-1">
          <span class="sr-only">Cloudiness:</span>
          {{ weather.clouds }}%
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
