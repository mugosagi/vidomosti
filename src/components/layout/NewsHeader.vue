<script setup>
import SubscribeBtn from '../Common/SubscribeBtn.vue';
</script>

<template>
  <header class="font-bold flex flex-col pt-2">
    <div class="w-full flex text-lg relative justify-between items-center">
      <div class="text-2xl">№<span class="text-3xl">&infin;</span></div>
      <div class="flex flex-col items-center">
        <SubscribeBtn />
        <span class="opacity-80 text-sm">
          Від <del class="opacity-60 text-xs">5$</del>
          <ins class="no-underline">10₴</ins> за місяць
        </span>
      </div>
    </div>
    <div class="inline-flex items-center relative select-none">
      <b class="logo"> Вїсник Ха </b>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  @apply text-5xl sm:text-8xl lg:text-9xl mx-auto mt-5 tracking-wide;
  font-family: KyivRegion;

  position: relative;
  display: flex;
}

.logo::after {
  @apply text-main-er;
  content: '~~~';
  position: absolute;
  left: 50%;
  bottom: 0.3em;
  height: 0;
  transform: translateX(-50%);
}
</style>
