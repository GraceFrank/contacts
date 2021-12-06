import { ObjectId, Document } from 'mongoose'

export interface IContactEdit {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

export enum ContactLogStatus {
  CREATED = 'created',
  UPDATED = 'updated'
}
export interface IContactLog extends Document {
  from: IContactEdit
  to: IContactEdit
  status: ContactLogStatus
  contactId: ObjectId
}
