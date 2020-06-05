/**
 * 请求参数约束
 * url 请求地址
 * method HTTP请求的方法
 * data post、patch 等请求方法的数据，放入 request body 中
 * params get、head 等请求方法的数据，拼接到 url 的 query string 中
 */
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

// 自定义 Method 类型，method 只能传递合法字符串
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
