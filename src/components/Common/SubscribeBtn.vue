<template>
  <button class="subscribe-btn" @click.prevent>Підписатись</button>
</template>

<script setup></script>

<style lang="scss" scoped>
.subscribe-btn {
  @apply rounded-full bg-main-fg text-main-bg py-1.5 px-6 text-sm sm:text-base;
  box-sizing: border-box;
  outline: none;
  position: relative;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &::after {
    @apply rounded-full border-main-fg border-2 border-solid;
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: -6px;
    opacity: 0;
  }

  &:focus::after {
    opacity: 1;
  }
}
</style>
