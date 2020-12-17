import bcrypt from 'bcrypt'

import { bCryptSaltRound, passwordRegex } from '../configs/authentication'

export function hash (data) {
    return bcrypt.hashSync(data, bCryptSaltRound)
}

export function compare (data, hashData) {
    return bcrypt.compareSync(data, hashData)
}