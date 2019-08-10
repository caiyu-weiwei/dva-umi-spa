import * as api from '../services/index'
export default{
  namespace: 'github',

  state: {
    accountInfo: {}
  },

  reducers: {
    save(state, { payload: { accountInfo } }) {
      return {...state, ...accountInfo}
    }
  },

  effects: {
    *getAccountInfo({ payload: { account } }, { call, put }) {
      const res = yield call(api.getAccountInfo, account)
      console.log('getAccountInfo res', res)
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, state = {} }) => {
        if (pathname === '/sys/github') {
          const { account } = state
          dispatch({
            type: 'getAccountInfo',
            payload: {
              account: account || 'caiyu-weiwei'
            }
          })
        }
      })
    }
  }
}