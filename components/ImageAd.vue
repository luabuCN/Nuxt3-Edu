<template>
  <img v-for="(item, index) in data " :key="index" :src="item.src" alt="图片广告"
    class=" w-full h-[120px] rounded mb-6 cursor-pointer" @click="$commonOpen(item)">
</template>

<script setup lang="ts">
import type { IIndxItemData } from '../apis/index'
interface IProps {
  data: Array<IIndxItemData>;
}

const props = defineProps<IProps>()
</script>

<style scoped></style>