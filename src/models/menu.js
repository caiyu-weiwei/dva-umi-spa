import * as api from '@/services/menu'
import { menuDataFilter } from '@/utils/_'
import { originMenuData, menuPermission } from '@/utils/config'
export default {
  namespace: 'menu',

  state: {
    menuData: [],
    differData: []
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload}
    }
  },

  effects: {
    *getMenuData({ payload }, { call, put }) {
      const { data } = yield call(api.menu, payload)
      console.log('getMenuData effects', data)
      const { menuData, differData } = menuDataFilter(originMenuData, data, menuPermission)
      console.log('menuData', menuData)
      yield put({
        type: 'save',
        payload: {
          menuData,
          differData
        }
      })
    }
  }
}