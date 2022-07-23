<script setup>
import { weather } from '@/utils/constants';
import { random } from '@/utils/helpers';
import SunIcon from '@/components/Icons/SunIcon.vue';
import CloudIcon from '@/components/Icons/CloudIcon.vue';
import FlagIcon from '@/components/Icons/FlagIcon.vue';
import DropIcon from '@/components/Icons/DropIcon.vue';
</script>

<template>
  <div class="overflow-hidden flex flex-col">
    <span class="scale-75 flex justify-center items-center lg:-mt-6 lg:mb-6">
      <span class="text-2xl font-bold flex flex-col items-center">
        <SunIcon class="h-28 w-28 animate-spin" />
        <span class="font-normal" style="font-family: KyivRegion">
          <span class="flex justify-center">
            <span>{{ weather.temp.day }}</span>
            <span aria-label="Degrees celsius" class="opacity-70">&deg;</span>
            <span class="pl-0.5 pr-1">/</span>
            <span>{{ weather.temp.night }}</span>
            <span aria-label="Degrees celsius" class="opacity-70">&deg;</span>
            <span aria-hidden="true">C</span>
          </span>
          <span class="capitalize mt-2"> {{ weather.description }} </span>
        </span>
      </span>
      <div class="flex flex-col items-start gap-2 ml-2">
        <div title="Humidity" class="flex gap-2 items-center justify-center">
          <DropIcon class="h-6 w-6 rotate-180" />
          <span class="py-1">
            <span class="sr-only">Humidity:</span>
            {{ weather.humidity }}%
          </span>
        </div>
        <div title="Wind speed" class="flex gap-2 items-center justify-center">
          <FlagIcon class="h-6 w-6" />
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
          <CloudIcon class="h-6 w-6" />
          <span class="py-1">
            <span class="sr-only">Cloudiness:</span>
            {{ weather.clouds }}%
          </span>
        </div>
      </div>
    </span>
    <div class="hidden lg:flex flex-1 gap-2">
      <span
        v-for="i in ['Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд', 'Пн']"
        :key="i"
        class="flex-1 flex flex-col items-center justify-center"
      >
        <span>{{ i }}</span>
        <SunIcon v-if="Math.random() < 0.5" class="h-8 w-8" />
        <CloudIcon v-else class="h-8 w-8" />
        <span class="flex flex-col scale-90">
          <span class="flex items-center justify-center ml-1">
            <span>{{ random(15, 30) }}</span>
            <span aria-label="Degrees celsius" class="opacity-70">&deg;</span>
          </span>
          <span class="my-0 h-px bg-main-fg -mt-1"></span>
          <!-- <span class="pl-0.5 pr-1">/</span> -->
          <span class="flex items-center justify-center ml-1">
            <span>{{ random(15, 30) }}</span>
            <span aria-label="Degrees celsius" class="opacity-70">&deg;</span>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
