import fetch from '@/utils/fetch'

export const menu = (payload) => {
  return fetch('/getMenuData', {
    method: 'POST',
    data: {
      ...payload
    }
  })
}