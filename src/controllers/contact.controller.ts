import { Response, Request, NextFunction } from 'express'
import Contact from '../models/contact.model'
import { IContact } from 'contact'

const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newContact: IContact = await Contact.create(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    if (error.code && error.code === 11000) {
      error.statusCode = 400
      error.message = 'Email already in use'
    }
    next(error)
  }
}

export { createContact }
