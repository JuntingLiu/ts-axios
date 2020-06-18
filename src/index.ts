/**
 * Axios 入口文件
 * @Author: Junting
 * @Date: 2020-06-05 16:34:41
 * @Last Modified by: Junting
 * @Last Modified time: 2020-06-18 22:20:47
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  // 处理配置
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
