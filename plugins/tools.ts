//定义全局的跳转插件

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      //全局跳转
      commonOpen: (item: any) => {
        if (item.type == "webview") {
          window.open(item.url);
        } else if (item.type == "course") {
          navigateTo(`/detail/courses/${item.course_id}`);
        }
      },
    },
  };
});
