import { Decrypt } from '@/utils/CryptoJS.js'
console.log('Decrypt', Decrypt)
export default {
  'POST /login'(req, res) {
    console.log('POST /login', req)
    const { body } = req
    const { username, password } = body
    if (Decrypt(password) === 'admin' && username === 'admin') {
      res.status(200)
        .json({
          data: {},
          message: '登录成功！',
          status: 0
        })
    } else {
      res.status(200)
        .json({
          data: {},
          message: '账户名或密码错误！',
          status: -1
        })
    }
  }
}