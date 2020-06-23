import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

// DESC: POST

// 请求后，服务响应是个空对象
// 因为发送的数据是一个普通对象，需要库里我们转换成了 JSON 对象字符串，
// 当是 header 请求头的内容类型为 Content-Type: text/plain; 所以解析不了，
// Content-Type 应该设置为 application/json;
axios({
  method: 'POST',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

let arr = new Int32Array([21, 31])
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})
