import * as api from '@/services/menu'
import { menuDataFilter, flattenMenuData } from '@/utils/_'
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
      const flattenMenu = flattenMenuData(menuData)
      console.log('menuData', menuData)
      console.log('flattenMenu', flattenMenu)
      yield put({
        type: 'save',
        payload: {
          menuData,
          differData,
          flattenMenu
        }
      })
    }
  }
}