'use strict'

const Joi = require('@hapi/joi')

module.exports = {
    signUpValidation: (req, res, callback) => {
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required(),
            mobile: Joi.string().required(),
            password: Joi.string().required()
        })
        const {error} = schema.validate(req)
        if(error){
          return  res.status(400).json(error)
        }
        return callback(true)
    }
}