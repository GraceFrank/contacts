import express from 'express'
import validationMiddleware from '../middleware/validator.middleware'
import { createContactSchema } from '../validators/contact.validator'
import { createContact } from '../controllers/contact.controller'
const router = express.Router()

/* @ts-ignore */
router.post('/', validationMiddleware(createContactSchema), createContact)

export default router
