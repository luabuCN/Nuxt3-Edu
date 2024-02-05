//将接收的对象转化为请求url的接口参数
export function useUrlParams(params: any): string {
  let urlParams = "";
  for (let key in params) {
    if (urlParams == "") {
      urlParams = `?${key}=${params[key]}`;
    } else {
      urlParams += `&${key}=${params[key]}`;
    }
  }
  console.log(urlParams, "url");

  return urlParams;
}
