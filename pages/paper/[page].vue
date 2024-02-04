<template>
  <div>
    考试列表 {{ route.params.page }}
    <p>{{ route.name }}</p>
  </div>
</template>
 
<script setup lang="ts">

const route = useRoute()

</script>
 
<style scoped></style>