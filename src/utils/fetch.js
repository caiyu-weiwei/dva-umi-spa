import fetch from 'dva/fetch'
import { message } from 'antd'
import router from 'umi/router'


export default async (url, options) => {
  /**
   * fetch 中options配置
   */
  const defaultOptions = {
    // 跨域
    mode: 'cors',
    cache: 'default',
    // 发送包含凭证请求 即：cookies
    credentials: 'include'
  }
  const newOptions = {...defaultOptions, ...options}
  const { method, body, headers } = newOptions
  if (['POST', 'PUT', 'DELETE'].includes(method)) {
    if (body instanceof FormData) {
      newOptions.headers = {
        ...headers,
        Accept: 'application/json'
      }
    } else {
      newOptions = {
        ...headers,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
      newOptions.body = JSON.stringify(newOptions.body)
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
        const { data: { alertDesc }, status } = res
        if (status !== 0) {
          message.error(alertDesc || '无权限！')
        }
      }
    })
    .catch(e => {
      const { name: status } = e
      if (status === 401) {}
    })


}