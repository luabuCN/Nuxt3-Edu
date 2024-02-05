<template>
  <div class=" dark:bg-dark min-w-[1000px] bg-gray-200 flex flex-col min-h-screen ">
    <NavBar />
    <main class="container-nav">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>