import { isDate, isPlainObject, encode } from './util'

/**
 * url 参数处理逻辑
 * @param url
 * @param params
 */
export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    // 值存在多种类型
    const val = params[key]
    // 进行下一个循环
    if (val === null || typeof val === 'undefined') {
      return
    }

    // 针对 val 可能是一个数组的处理方式
    // 多种类型统一以数组的形式存储所有参数值，方便处理数据
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    // 对参数值进行类型处理
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }

      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    // 忽略 hash
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
