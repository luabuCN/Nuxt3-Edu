<template>
  <div class=" dark:bg-dark bg-white fixed top-0 left-0 shadow-sm z-50 w-screen">
    <div class="container-nav flex items-center h-[60px]">
      <el-button class=" !text-xl !font-bold" text>LUABU CODE</el-button>
      <UIMenu>
        <UIMenuItem v-for="(item, index) in menus" :key="index" :active="isMenuItemActive(item)"
          @click="handleOpen(item.path)">
          {{ item.name }}
        </UIMenuItem>
      </UIMenu>
      <div class="dark:text-white  space-x-4  ml-auto w-[300px] flex items-center justify-center">
        <el-button link> <a href="#"
            class="dark:text-white no-underline text-gray-900 font-bold text-lg hover:text-gray-500">登录</a>
        </el-button>
        <el-button class=" dark:bg-dark " :icon="Search" circle />
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
      <DarkOrLight class=" absolute right-8" />
    </div>
  </div>
  <div class=" w-full h-[80px]"></div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

const route = useRoute()

export type Menu = {
  name: string,
  path: string,
  match?: routeInfo[]
}

export type routeInfo = {
  name?: string,
  params?: Record<string, any>
}

const menus: Menu[] = [
  {
    name: "首页",
    path: "/"
  },
  {
    name: "考试",
    path: "/paper/1",
    match: [{ name: 'paper-page' }]
  },
  {
    name: "拼团",
    path: "/list/group/1",
    match: [{ name: 'list-type-page', params: { type: 'group' } }]
  },
  {
    name: "秒杀",
    path: "/list/fashsale/1",
    match: [{ name: 'list-type-page', params: { type: 'flashsale' } }]
  },
  {
    name: "直播",
    path: "/list/live/1",
    match: [{ name: 'list-type-page', params: { type: 'live' } }]
  },
  {
    name: "专栏",
    path: "/list/column/1",
    match: [{ name: 'list-type-page', params: { type: 'column' } }]
  },
  {
    name: "电子书",
    path: "/list/book/1",
    match: [{ name: 'list-type-page', params: { type: 'book' } }]
  },
  {
    name: "社区",
    path: "/bbs/0/1",
    match: [{ name: 'bbs-bbs_id-page' }]
  },
  {
    name: "课程",
    path: "/list/course/1",
    match: [{ name: 'list-type-page', params: { type: 'course' } }]
  },
]

const handleOpen = (path: string) => {
  navigateTo(path)
}

const isMenuItemActive = (item: Menu) => {
  if (item.match) {
    let i = item.match.findIndex(o => {
      let res = true
      if (o.params && typeof o.params === 'object') {
        res = Object.keys(o.params).every(key => {
          return o.params && o.params[key] === route.params[key]
        })
      }
      return o.name == route.name && res
    })
    return i != -1
  }
  return route.path == item.path
}

</script>

<style scoped></style> 

