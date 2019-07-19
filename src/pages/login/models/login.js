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
      const response = yield call(api.login, payload)
      console.log('effects login ', response)
    }
  }
}