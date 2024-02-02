<template>
  <div
    class=" h-8 w-8 cursor-pointer select-none rounded bg-slate-100 text-gray-500 shadow dark:bg-slate-700 dark:text-gray-400"
    @click="handleToggleTheme">
    <span v-show="!dark">
      <svg t="1684833132212" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="8388" width="32" height="32">
        <path d="M501.48 493.55m-233.03 0a233.03 233.03 0 1 0 466.06 0 233.03 233.03 0 1 0-466.06 0Z" fill="#707070"
          p-id="8389"></path>
        <path
          d="M501.52 185.35H478.9c-8.28 0-15-6.72-15-15V87.59c0-8.28 6.72-15 15-15h22.62c8.28 0 15 6.72 15 15v82.76c0 8.28-6.72 15-15 15zM281.37 262.76l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.86-5.86-15.36 0-21.21l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.35 0 21.21zM185.76 478.48v22.62c0 8.28-6.72 15-15 15H88c-8.28 0-15-6.72-15-15v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15zM270.69 698.63l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.36 5.86-21.21 0l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.85-5.86 15.35-5.86 21.21 0zM486.41 794.24h22.62c8.28 0 15 6.72 15 15V892c0 8.28-6.72 15-15 15h-22.62c-8.28 0-15-6.72-15-15v-82.76c0-8.28 6.72-15 15-15zM706.56 709.31l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.36 0 21.21l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.85-5.86-15.35 0-21.21zM802.17 493.59v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15v22.62c0 8.28-6.72 15-15 15h-82.76c-8.28 0-15-6.72-15-15zM717.24 273.44l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.86-5.86 15.36-5.86 21.21 0l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.35 5.86-21.21 0z"
          fill="#707070" p-id="8390"></path>
      </svg>
    </span>
    <span v-show="dark">
      <svg t="1684833077751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="7162" width="32" height="32">
        <path
          d="M335.22 240.91c0-57.08 10.68-111.66 30.15-161.87-167.51 64.86-286.3 227.51-286.3 417.92 0 247.42 200.58 448 448 448 190.34 0 352.95-118.71 417.85-286.13-50.16 19.42-104.69 30.08-161.71 30.08-247.41 0-447.99-200.57-447.99-448z"
          fill="#dbdbdb" p-id="7163"></path>
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
const dark: Ref<Boolean> = ref(false)

const handleToggleTheme = () => {
  const currentTheme = !dark.value;
  dark.value = currentTheme;
  if (currentTheme) {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add("dark")
  } else {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark")
  }
}
</script>

<style scoped></style>