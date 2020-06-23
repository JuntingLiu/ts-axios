const toString = Object.prototype.toString

export function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // 空格转 +
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

// val is Date 类型谓词保护来声明 val 是一个 Date 类型
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// 使用此方式判断一个 fromData 也是一个对象
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 检验是不是一个普通对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
