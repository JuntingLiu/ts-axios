import { AxiosRequestConfig } from './types'

function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  // 初始化一个请求，接收 5 个参数：
  // method、url、async(是否异步，接收 boolean)
  // user(可选，认证用途)、password(可选，认证用途)
  request.open(method.toUpperCase(), url, true)
  // 发送请求
  request.send(data)
}

export default xhr
