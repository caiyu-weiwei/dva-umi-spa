import router from 'umi/router'
import * as api from '../services/login'
import { Encrypt } from '@/utils/CryptoJS.js'
export default {
  namespace: 'login',
  state: {
    isError: false
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload}
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
      let { password } = payload
      payload = {...payload, password: Encrypt(password) }
      const { message, status } = yield call(api.login, payload)
      if (status === 0) {
        message
          .success(message, 1)
          .then(() => router.push('/sys'))
      } else {
        yield put({
          type: 'save',
          payload: {
            isError: true
          }
        })
      }
    }
  }
}