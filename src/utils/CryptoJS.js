import { AES, enc, mode, pad } from 'crypto-js'

const key_iv = (key='1234123412ABCDEF', iv='ABCDEF1234123412') => {
  return{
    key: enc.Utf8.parse(key),
    iv: enc.Utf8.parse(iv)
  }
}

// 加密方法
export const Encrypt = (str, aes_key, aes_iv) => {
  const { key, iv } = key_iv(aes_key, aes_iv)
  let srcs = enc.Utf8.parse(str)
  let encrypted = AES.encrypt(srcs, key,
    { iv, mode: mode.CBC, padding: pad.Pkcs7 }
  )
  return encrypted.ciphertext.toString().toUpperCase()
}
// 解密方法
export const Decrypt = (str, aes_key, aes_iv) => {
  const { key, iv } = key_iv(aes_key, aes_iv)
  let encryptedHexStr = enc.Hex.parse(str)
  let srcs = enc.Base64.stringify(encryptedHexStr)
  let decrypt = AES.decrypt(srcs, key, { iv, mode: mode.CBC, padding: pad.Pkcs7 })
  let decryptedStr = decrypt.toString(enc.Utf8)
  return decryptedStr.toString()
}