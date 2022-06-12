<script setup>
import DashboardGrid from '../Common/DashboardGrid.vue';
import { weather, currency } from '../utils/constants';
</script>

<template>
  <div class="flex items-center relative select-none mx-auto mt-24">
    <!-- <span class="logo--decor"> и </span> -->
    <div class="text-5xl mx-4">40 років незалежності України!</div>
    <!-- <span class="logo--decor"> и </span> -->
  </div>
  <div class="border-solid box-content border-y-4 border-main-fg mt-10 py-1">
    <div
      class="border-solid border-y-2 border-main-fg h-96 flex justify-between w-full"
    >
      <DashboardGrid>{{ weather }}</DashboardGrid>
      <span class="w-px border-x border-main-fg my-5"></span>
      <DashboardGrid>{{ currency }}</DashboardGrid>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
