import { nanoid } from 'nanoid'
import { IContact } from '../types/contact'
import { model, Schema } from 'mongoose'
import ContactLogsModel from './contactLogs.model'
import { ContactLogStatus } from '../types/contactLog'

const contactSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 255
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 255
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 255
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 25
    }
  },
  { timestamps: true }
)

// hooks

contactSchema.pre('save', async function (next) {
  this.id = nanoid()
  next()
})

contactSchema.post('save', async function (doc, next) {
  await ContactLogsModel.create({
    from: null,
    to: doc,
    status: ContactLogStatus.CREATED,
    contactId: doc._id
  })
  next()
})

export default model<IContact>('contacts', contactSchema)
