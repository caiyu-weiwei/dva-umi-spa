import * as api from '@/services/menu'
console.log('playform api', api)
export default {
  namespace: 'menu',

  state: {
    menuData: []
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload}
    }
  },

  effects: {
    *getMenuData({ payload }, { call, put }) {
      const { data: menuData } = yield call(api.menu, payload)
      console.log('getMenuData effects', menuData)
      yield put({
        type: 'save',
        payload: {
          menuData
        }
      })
    }
  }
}