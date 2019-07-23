import fetch from 'dva/fetch'
import { notification } from 'antd'
import router from 'umi/router'


export default async (url, options) => {
  /**
   * fetch 中options配置
   */
  const defaultOptions = {
    // 跨域
    mode: 'cors',
    cache: 'default',
    // 强制加入凭据头 即：cookies
    credentials: 'include'
  }
  let newOptions = {...defaultOptions, ...options}
  const { method, body, headers } = newOptions
  if (['POST', 'PUT', 'DELETE'].includes(method)) {
    const { data } = newOptions
    if (data instanceof FormData) {
      newOptions.headers = {
        ...headers,
        Accept: 'application/json'
      }
      newOptions.body = data 
    } else {
      newOptions.headers = {
        ...headers,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
      newOptions.body = JSON.stringify(data)
    }
  }

  const response = fetch(url, newOptions)
    .then(res => {
      const { status } = res
      if (status >=200 && status < 300) {
        return res
      }
    })
    .then(res => {
      if (newOptions.method === 'DELETE' || res.status === 204) {
        return res.text()
      }
      return res.json()
    })
    .then(res => {
      if (!(newOptions.method === 'DELETE' || res.status === 204)) {
        console.log('登录有问题', res)
        const { data, message, status } = res
        if (status !== 0) {
          notification['error']({
            message: message || '无权限！'
          })
        }
      }
      return res
    })
    .catch(e => {
      const { name: status } = e
      if (status === 401) {}
    })

    return response

}