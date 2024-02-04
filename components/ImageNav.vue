<template>
  <el-row :gutter="20" class="mb-6">
    <el-col :span="6" v-for="item in props.data" :key="item.src">
      <el-card class=" cursor-pointer" :body-style="{ padding: '0px' }" @click="$commonOpen(item)">
        <img :src="item.src" class="w-[100%] h-[120px]">
        <template #footer>
          <div class=" text-center">{{ item.name }}</div>
        </template>
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