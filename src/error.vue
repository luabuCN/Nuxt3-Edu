<template>
  <div class=" mt-20 ">
    <el-result icon="error" title="错误提示" :sub-title="props.error.message">
      <template #extra>
        <el-button type="primary" @click="handleError">回到首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">

type errorType = {
  error: { message: string }
}

const props = defineProps<errorType>()

const handleError = () => clearError({ redirect: '/' })

</script>

<style scoped></style>