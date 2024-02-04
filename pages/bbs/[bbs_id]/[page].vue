<template>
  <div>
    问答社区 {{ route.params.bbs_id }} ~ {{ route.params.page }}
    <p>{{ route.name }}</p>
  </div>
</template>
 
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

</script>
 
<style scoped></style>