/**
 * 处理请求数据和响应数据
 * @Author: Junting
 * @Date: 2020-06-23 21:48:19
 * @Last Modified by: Junting
 * @Last Modified time: 2020-06-23 21:57:24
 */
import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}
