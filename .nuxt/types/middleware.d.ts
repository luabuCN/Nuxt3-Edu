import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "createorder" | "list" | "only-visitor" | "search"
declare module "E:/全栈开发/SSR/Nuxt3-Edu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}