<script setup>
import NewsHeader from '../layout/NewsHeader.vue';
import CityOverview from '../layout/CityOverview.vue';
</script>

<template>
  <div class="max-w-screen-xl m-auto flex flex-col px-5">
    <NewsHeader />
    <CityOverview />

    <!-- <img
      src="https://www.xaprb.com/media/2018/08/kittenы.jpg"
      alt="Спящий кот"
    /> -->
  </div>
</template>

<style lang="scss" scoped>
.logo--decor {
  @apply text-7xl text-main-er;
  font-family: 'Mariupol Symbols';
}
</style>
