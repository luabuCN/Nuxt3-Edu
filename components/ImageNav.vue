<template>
  <el-row :gutter="20" class="mb-6">
    <el-col :span="6" v-for="item in props.data" :key="item.src">
      <el-card class=" cursor-pointer" :body-style="{ padding: '0px' }" @click="$commonOpen(item)">
        <img :src="item.src" class="w-[100%] h-[150px]">
        <div class=" dark:bg-dark dark:text-white text-center py-5" style="margin-top: -5px;">{{ item.name }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import type { IIndxItemData } from '../apis/index'
interface IProps {
  data: Array<IIndxItemData>;
}

const props = defineProps<IProps>()


</script>

<style scoped>
:deep(.el-card__footer) {
  border-top: none;
}
</style>