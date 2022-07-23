<script setup>
import DashboardGrid from '@/components/Common/DashboardGrid.vue';
import WeatherCard from '@/components/Common/WeatherCard.vue';
import CurrencyCard from '@/components/Common/CurrencyCard.vue';
import { currency } from '@/utils/constants';
</script>

<template>
  <div class="flex items-center relative select-none mx-auto mt-6 sm:mt-14">
    <div class="text-center text-2xl sm:text-5xl">
      40 років незалежності України!
    </div>
  </div>
  <div
    class="border-solid box-content border-b-4 border-main-fg mt-5 sm:mt-10 py-1 flex flex-col"
  >
    <div class="sm:text-lg mx-auto">Понеділок, 24 серпня 2031 р.</div>
    <div
      class="border-solid border-b-2 border-main-fg flex flex-col lg:flex-row justify-center w-full py-5 lg:py-10"
    >
      <WeatherCard class="flex-1 lg:pl-5" />
      <span
        class="border-y h-px lg:h-auto lg:w-px lg:border-x border-main-fg my-5 mx-5 lg:mx-10"
      ></span>
      <DashboardGrid class="gap-5 lg:gap-14 lg:pr-5">
        <CurrencyCard
          v-for="(c, index) in currency"
          :data="c"
          :title="index"
          :key="index"
          class="h-20 lg:h-28 w-full rounded shadow backdrop-brightness-95"
        />
      </DashboardGrid>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
