<template>
  <div class=" dark:bg-dark bg-white fixed top-0 left-0 shadow-sm z-50 w-screen">
    <div class="container-nav flex items-center h-[60px]">
      <el-button class=" !text-xl !font-bold" text>LUABU CODE</el-button>
      <div class="  flex items-center justify-center px-4">
        <div class="menu-item dark:text-white " :class="{ 'menu-item-active': (route.path == item.path) }"
          v-for="(item, index) in menus" :key="index">{{ item.name }}</div>
      </div>
      <div class=" space-x-4  ml-auto w-[300px] flex items-center justify-center">
        <el-button text> 登录 </el-button>
        <el-button class=" dark:bg-dark dark:text-white" :icon="Search" circle />
        <client-only>
          <el-dropdown>
            <el-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <template #dropdown>
              <el-dropdown-item>用户中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </template>
          </el-dropdown>
        </client-only>

      </div>
      <DarkOrLight class=" float-right" />
    </div>
  </div>
  <div class=" w-full h-[80px]"></div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

const route = useRoute()

export type Menu = {
  name: string,
  path: string
}

const menus: Menu[] = [
  {
    name: "首页",
    path: "/"
  },
  {
    name: "考试",
    path: "/paper"
  },
  {
    name: "拼团",
    path: "/list/group/1"
  },
  {
    name: "秒杀",
    path: "/list/fashsale/1"
  },
  {
    name: "直播",
    path: "/list/live/1"
  },
  {
    name: "专栏",
    path: "/list/column/1"
  },
  {
    name: "电子书",
    path: "/list/book/1"
  },
  {
    name: "社区",
    path: "/bbs/0/1"
  },
  {
    name: "课程",
    path: "/list/course/1"
  },
]

</script>

<style scoped>
.menu-item {
  @apply px-2 py-1 mx-1 hover:bg-blue-100 hover:text-blue-600 cursor-pointer rounded active:bg-blue-300 transition-all duration-300
}

.menu-item-active {
  @apply !bg-blue-100 text-blue-600
}
</style> 

