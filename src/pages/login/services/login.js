import fetch from '@/utils/fetch'

export const login = (payload) => {
  fetch('/login', {
    method: 'POST',
    data: {
      ...payload
    }
  })
}