<template>
  <el-card class=" cursor-pointer mb-4" :body-style="{ padding: '0px' }" @click="$commonOpen(item)">
    <img :src="item.cover" class="w-[100%] h-[150px]">
    <div class="p-2  dark:bg-dark dark:text-white" style="margin-top: -5px;">
      <span class=" font-bold w-full truncate"> {{ item.title }}</span>
    </div>
    <div class=" dark:bg-dark dark:text-white flex pl-2 h-10 items-center">
      <Price :value="item.price" />
      <Price :value="item.t_price" through class="ml-2 dark:text-white" />
    </div>
    <!-- 判断是否要显示倒计时 -->
    <template #footer v-if="item.group_id || item.start_time">
      <div class=" dark:bg-dark flex items-center p-3 bg-yellow-400 text-white text-xs rounded-b">
        {{ item.group_id ? '拼团中' : '秒杀中' }}
        <div class="ml-auto flex items-center">
          倒计时
          <Seckill :time="item.end_time" />
        </div>
      </div>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import type { IIndxItemData, Rows } from '../apis/index'

interface Props {
  item: IIndxItemData & Rows
}

const props = withDefaults(defineProps<Props>(), {})

</script>

<style scoped>
:deep(.el-card__footer) {
  padding: 0;
  border-top: 0
}
</style>