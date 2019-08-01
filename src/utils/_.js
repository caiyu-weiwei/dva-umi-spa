import _ from 'lodash'
import memoizeOne from 'memoize-one'
import isEqual from 'lodash.isEqual'
import { menuPermission } from './config'
/**
 * 将二维数组转化成一维数组
 * weiwei
 */
export const _flattenMenuData = (menuData = [], pathArr = []) => {
}

/**
 * 提取服务端返回的路由的key
 */
const _refineMenuDataKey = (menuData = [], keys = []) => {
  const menus = _.cloneDeep(Array.isArray(menuData) ? menuData : [])
  menus.map(menu => {
    const { key, children } = menu
    if (Array.isArray(menu.children) && children.length) {
      return _refineMenuDataKey(children, keys)
    }
    return keys.push(key)
  })
  return keys
}

/**
 * 根据keys过滤
 * @param {*} originMenuData 路由全数据
 * @param {*} keys 服务端返回的路由的keys数组
 */

const _filter = (originMenuData, keys) => {
  console.log('_filter originMenuData', originMenuData)
  console.log('_filter keys', keys)
  const data = originMenuData.map(menu => {
    const { key, children } = menu
    if (Array.isArray(children) && children.length) {
      const res = _filter(children, keys)
      _.remove(res, val => val === undefined)
      menu.children = res
      return menu
    } else if (keys.includes(key)) {
      return menu
    } else {
      return undefined
    }
  })
  _.remove(data, item => item === undefined)
  return data
}

/**
 * 过滤路由数据
 * @param {*} originMenuData 路由全数据
 * @param {*} data mock数据返回的路由数据
 * @param {*} menuPermission 是否需要加权限
 */
const _menuDataFilter = (originMenuData, data, menuPermission) => {
  const menuData = _.cloneDeep(Array.isArray(originMenuData) ? originMenuData : [])
  const optionsData = _.cloneDeep(Array.isArray(data) ? data : [])

  if (!menuPermission) {
    return {
      menuData,
      differData: []
    }
  }

  const keys = _refineMenuDataKey(optionsData)
  return {
    menuData: _filter(menuData, keys),
    differData: []
  }
}
export const menuDataFilter = memoizeOne(_menuDataFilter, isEqual)