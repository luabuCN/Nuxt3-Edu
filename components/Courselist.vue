<template>
  <el-card class=" cursor-pointer mb-4" :body-style="{ padding: '0px' }" @click="$commonOpen(item)">
    <img :src="item.cover" class="w-[100%] h-[120px]">
    <div class=" p-2">
      <span class=" font-bold w-full truncate"> {{ item.title }}</span>
    </div>
    <div class=" flex mt-2 pl-2 h-10 items-center">
      <Price :value="item.price" />
      <Price :value="item.t_price" through class="ml-2" />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import type { IIndxItemData } from '../apis/index'

interface Props {
  item: IIndxItemData
}

const props = withDefaults(defineProps<Props>(), {

})

</script>

<style scoped></style>