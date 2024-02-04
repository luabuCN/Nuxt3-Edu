<template>
  <template v-for="item in data.data" :key="item.id">
    <Banner :data="item.data" v-if="item.type === 'swiper'" />
    <ImageNav :data="item.data" v-else-if="item.type === 'icons'" />
    <ImageAd :data="item.data" v-else-if="item.type === 'imageAd'" />
    <ListCard :data="item.data" v-else-if="item.type === 'list'" />
    <ListCard :data="item.data" :type="item.listType" :title="item.title" v-else-if="item.type == 'promotion'" />
  </template>
</template>

<script setup lang="ts">
import { useIndexDataApi } from '../apis/index'

onMounted(() => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
});

const { data } = await useIndexDataApi()
console.log(data, 'data.....');

</script>