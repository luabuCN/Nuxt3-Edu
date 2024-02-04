import httpRequest, { type ResultType } from "../composables/useHttp";

export interface IIndexData {
  logo?: string;
  data: IIndxItemData[];
  checked: boolean;
  type: string;
  listType?: "group" | "coures";
  title?: string;
  showMore?: boolean;
  more?: boolean;
  beian?: string;
}

export interface IIndxItemData {
  title?: string;
  type: string;
  url?: string;
  page_id?: number;
  page_title?: string;
  course_title?: string;
  course_id: any;
  src?: string;
  name?: string;
  id?: number;
  cover?: string;
  try?: string;
  content?: string;
  price?: string;
  t_price?: string;
  school_id?: number;
  status?: number;
  sub_count?: number;
  is_single?: number;
  created_time?: string;
  updated_time?: string;
}

export interface IGroupParams {
  page?: number;
  usable?: 0 | 1;
  limit?: number;
}
//首页信息
export function useIndexDataApi() {
  return httpRequest.get<ResultType<IIndexData[]>>("/index");
}

//拼团信息
export function useGroupDataApi(params: IGroupParams) {
  return httpRequest.get("/group");
}
