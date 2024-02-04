<template>
  <div class=" mt-auto bg-dark-400 text-light-500">
    <div class="flex  items-center justify-center py-4">
      <a :href="item.url" v-for="item in footerLinkArrays" :key="item.name" class="p-3 no-underline text-gray-700">{{
        item.name }}</a>
    </div>
    <div class="container mx-auto border-t border-gray-600 flex  items-center justify-center !py-4">
      <small>
        Copyright© 2022 LUABU 鄂ICP备 1000000号-1
      </small>
    </div>
  </div>
</template>

<script setup lang="ts">

type FooterType = {
  name: string,
  url: string
}

let footerLinkArrays = [
  {
    name: "项目源码",
    url: "https://github.com/luabuCN/Nuxt3-Edu"
  },
  {
    name: "其他项目",
    url: "https://github.com/luabuCN",
  },
  {
    name: "站长博客",
    url: "https://www.20011102.xyz"
  },
  {
    name: "烂笔头",
    url: "https://www.20011102.xyz"
  },
]

</script>

<style scoped></style>