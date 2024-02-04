<template>
  <el-carousel :interval="5000" arrow="always" class=" mb-6" autoplay>
    <el-carousel-item v-for="item in props.data" :key="item.src" @click="$commonOpen(item)">
      <img :src="item.src" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import type { IIndxItemData } from '../apis/index'
interface IProps {
  data: Array<IIndxItemData>;
}

const props = defineProps<IProps>()

</script>

<style scoped></style>