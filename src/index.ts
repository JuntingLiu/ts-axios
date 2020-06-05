/**
 * Axios 入口文件
 * @Author: Junting
 * @Date: 2020-06-05 16:34:41
 * @Last Modified by: Junting
 * @Last Modified time: 2020-06-05 16:50:56
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
