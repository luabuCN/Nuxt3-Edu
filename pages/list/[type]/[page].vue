<template>
  <div>
    公告列表 {{ route.params.type }} ~ {{ route.params.page }}
    <p>{{ route.name }}</p>
  </div>
</template>
 
<script setup lang="ts">

const route = useRoute()
console.log(route, 'route');


</script>
 
<style scoped></style>