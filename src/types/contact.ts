import { Document } from 'mongoose'

export interface IContact extends Document {
  firstName: string
  lastName: string
  email: string
  phone: string
  id: string
  createdAt: Date
  updatedAt: Date
}
