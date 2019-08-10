import fetch from 'dva/fetch'

export const getAccountInfo = async (account) => {
  return await fetch(`https://api.github.com/users/${account}`)
    .then(res => res.json())
}