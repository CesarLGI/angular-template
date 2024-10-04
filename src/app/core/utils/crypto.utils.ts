import { AES, enc } from 'crypto-js'

export const encrypt = (value: any) => {
    const result = AES.encrypt(value, 'Key')
    return result.toString()
}

export const decrypt = (value: any) => {
    const result = AES.decrypt(value, 'Key')
    return result.toString(enc.Utf8)
}
