import express from 'express'
import contactsRouter from './contact.route'

const router = express.Router()

router.use('/v1/contacts', contactsRouter)

export default router
