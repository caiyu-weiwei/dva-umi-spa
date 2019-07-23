import { message, notification } from 'antd'
import router from 'umi/router'
import * as api from '../services/login'
import { Encrypt } from '@/utils/CryptoJS.js'
export default {
  namespace: 'login',
  state: {
    isError: false
  },

  reducers: {},

  effects: {
    *login({ payload }, { call, put }) {
      console.log('effects login payload', payload)
      let { password } = payload
      payload = {...payload, password: Encrypt(password) }
      console.log('effects login Encrypt(password)', payload)
      const { message, status } = yield call(api.login, payload)
      if (status === 0) {
        message.success(message)
        router.push('/sys')
      }
    }
  }
}