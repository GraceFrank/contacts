import { Response, Request } from 'express'
import Contact from '../models/contact.model'
import { IContact } from 'contact'

const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const newContact: IContact = await Contact.create(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    throw error
  }
}

export { createContact }
