import Joi from 'joi'

export const createContactSchema: Joi.ObjectSchema<any> = Joi.object({
  email: Joi.string().email().required().min(5).max(255),
  phone: Joi.string()
    .max(20)
    .min(4)
    .pattern(/^[0-9]+$/)
    .required(),
  firstName: Joi.string().required().min(1).max(255),
  lastName: Joi.string().required().min(1).max(255)
}).required()
