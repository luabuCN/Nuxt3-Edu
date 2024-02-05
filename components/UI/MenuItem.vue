<template>
  <div class="menu-item " :class="{ 'menu-item-active': active }">
    <slot />
  </div>
</template>

<script setup lang="ts">

defineProps({
  active: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
.menu-item {
  @apply dark:text-white px-2 py-1 mx-1 hover:bg-blue-100 hover:text-blue-600 cursor-pointer rounded active:bg-blue-300 transition-all duration-300
}

.menu-item-active {
  @apply !bg-blue-100 text-blue-600
}
</style>