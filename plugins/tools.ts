//定义全局的跳转插件
import type { IIndxItemData } from "../apis/index";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      //全局跳转
      commonOpen: (item: IIndxItemData) => {
        if (item.type == "webview") {
          window.open(item.url);
        } else if (item.type == "course") {
          navigateTo(`/detail/courses/${item.course_id}`);
        }
      },
    },
  };
});
