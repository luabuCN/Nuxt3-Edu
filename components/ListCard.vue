<template>
  <div>
    <div class=" flex mb-3">
      <span>{{ title }}</span>
      <el-button link class=" ml-auto">查看更多</el-button>
    </div>
    <el-row :gutter="20" class="mb-6">
      <el-col :span="6" v-for="(item, index) in pData" :key="index">
        <Courselist :item="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import type { IIndxItemData, Rows } from '../apis/index'
import { useGroupDataApi } from '../apis/index'

interface IProps {
  data: Array<IIndxItemData & Rows>;
  title: string;
  type: 'coures' | 'group'
}

const props = withDefaults(defineProps<IProps>(), {
  title: '展示区域标题',
  data: () => [],
  type: 'coures'
})

const pData = ref(props.data || [])

if (props.type === 'group') {
  const { data } = await useGroupDataApi({ page: 1, usable: 1, limit: 8 })
  pData.value = ((data.value.data.rows).reverse() as unknown) as Array<IIndxItemData & Rows> || []
}



</script>

<style scoped></style>