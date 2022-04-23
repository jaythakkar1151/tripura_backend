'use strict'

const {User} = require('../../models')
const {signUpValidation} = require('../../services/AuthControllerValidations')
const Helper = require('../../services/Helper')

module.exports = {
    signUp: (req, res) => {
        const reqParam = req.body
        signUpValidation(reqParam, res, async (validate) => {
            if (validate) {
                await User.findOne({
                    where: {
                        email: reqParam.email
                    }
                }).then(async (userExist) => {
                    if (userExist) {
                        const msg = {
                            msg: "This user already Exists"
                        }
                        return res.status(200).json(msg)
                    } else {
                        const password = await Helper.generatePassword(reqParam.password)
                        let otp = await Helper.makeRandomDigit(4)
                        await User.findAll({
                            where: {
                                otp: otp
                            }
                        }).then(async (otpExists) => {
                            if (otpExists) {
                                otp = await Helper.makeRandomDigit(4)
                            }
                            const tempObj = {
                                name: reqParam.name,
                                email: reqParam.email,
                                mobile: reqParam.mobile,
                                password: password,
                                otp: otp
                            }
                            await User.create(tempObj).then((userData)=>{
                                const resData = {
                                    name: userData.name,
                                    email: userData.email,
                                    mobile: userData.mobile
                                }
                                return res.status(200).json(resData)
                            }).catch(()=>{
                                const msg = {
                                    msg: "InternalError"
                                }
                                return res.status(400).json(msg)
                            })
                        }).catch(()=>{
                            const msg = {
                                msg: "InternalError"
                            }
                            return res.status(400).json(msg)
                        })
                    }
                }).catch(() => {
                    const msg = {
                        msg: "InternalError"
                    }
                    return res.status(400).json(msg)
                })
            }
        })
    }
}