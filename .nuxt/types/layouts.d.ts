import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "login"
declare module "E:/全栈开发/SSR/Nuxt3-Edu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}