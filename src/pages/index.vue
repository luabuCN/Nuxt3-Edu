<template>
  <h1 class=" dark:bg-darktext-6xl font-semibold text-sky-400">首页</h1>
  <NuxtLink to="/list">list</NuxtLink>
</template>

<script setup>


onMounted(() => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
});
</script>