<template>
  <div class="flex-1 grid grid-cols-4"><slot></slot></div>
</template>

<script setup></script>

<style lang="scss">
.grid {
  > * {
    @apply col-span-2 lg:col-span-2;
  }
  // grid-template-rows: repeat(auto, 150px);
}
</style>
