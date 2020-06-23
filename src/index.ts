/**
 * Axios 入口文件
 * @Author: Junting
 * @Date: 2020-06-05 16:34:41
 * @Last Modified by: Junting
 * @Last Modified time: 2020-06-23 21:58:46
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  // 处理配置
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
