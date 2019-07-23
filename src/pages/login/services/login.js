import fetch from '@/utils/fetch'

export const login = (payload) => {
  return fetch('/login', {
    method: 'POST',
    data: {
      ...payload
    }
  })
}