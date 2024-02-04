<template>
  <span :class="through ? 'text-gray-500 text-xs line-through' : ' text-rose-500 font-bold'">
    {{ parseFloat(value) == 0 ? '免费' : 'CNY' + value }}
  </span>
</template>

<script setup lang="ts">
interface IProps {
  value: string;
  through: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  value: '0',
  through: false
});
</script>

<style scoped></style>