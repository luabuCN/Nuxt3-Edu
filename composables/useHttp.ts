// 需额外添加的
import type { UseFetchOptions, AsyncData } from "nuxt/dist/app/composables";
import { ElMessage } from "element-plus";

const BASE_URL = "http://demonuxtapi.dishait.cn/pc";

export type Methods = "GET" | "POST";
export interface ResultType<T> {
  value: any;
  [x: string]: any;
  code: number;
  data: T;
  msg: string;
}
class httpRequest {
  // 泛型，参数，返回类型
  request<T = any>(
    url: string,
    method: Methods,
    data: any,
    options?: UseFetchOptions<T, any, any>
  ): Promise<AsyncData<T, any>> {
    return new Promise((resolve, reject) => {
      const token = useCookie("token");
      let option = {
        method: method || "GET",
        baseURL: BASE_URL,
        headers: {
          appid: "bd9d01ecc75dbbaaefce",
          token: token.value ? token.value : "",
        },
        ...options,
      };
      if (method == "GET") {
        option.query = data;
      } else {
        option.body = data;
      }
      // 返回值 和 参数类型
      useFetch<T>(url, option as any)
        .then((res: any) => {
          resolve(res as AsyncData<T, any>);
        })
        .catch((error) => {
          ElMessage.error(error || "请求失败");
          reject(error);
        });
    });
  }
  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T, any, any>) {
    return this.request<T>(url, "POST", data, options);
  }

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T, any, any>) {
    return this.request<T>(url, "GET", params, options);
  }
}
export default new httpRequest();
