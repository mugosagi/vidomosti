<script setup>
import SubscribeBtn from '../Common/SubscribeBtn.vue';
</script>

<template>
  <header class="font-bold flex flex-col pt-5">
    <div class="w-full flex text-lg relative justify-center items-center">
      <div class="text-2xl absolute left-0">№1</div>
      <div>Понеділок, 24 серпня 2031 р.</div>
      <div class="absolute right-0 flex flex-col items-center -top-2">
        <SubscribeBtn />
        <span class="opacity-80 text-sm">
          Від <del class="opacity-60 text-xs">5$</del>
          <ins class="no-underline">10₴</ins> за місяць
        </span>
      </div>
    </div>
    <div class="inline-flex items-center relative select-none type">
      <b class="text-8xl mx-auto logo mt-40 tracking-wide"> Вїсник Ха </b>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  font-family: KyivRegion;

  position: relative;
  display: flex;
}

.logo::after {
  @apply text-main-er;
  content: '~~~';
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 0;
  transform: translateX(-50%);
}
</style>
