'use strict'

const Bcrypt = require('bcrypt')

module.exports = {
    generatePassword: (password) =>
        new Promise((resolve, reject) =>
            Bcrypt.hash(password, 10, (err, hash) => {
                if (err) reject()
                resolve(hash)
            })
        ),
    makeRandomDigit: (length) => {
        let result = ''
        const numbers = '0123456789'
        const numbersLength = numbers.length
        for (let i = 0; i < length; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbersLength))
        }
        return result
    }
}
