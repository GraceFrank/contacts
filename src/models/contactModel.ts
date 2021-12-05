import { IContact } from '../types/contact'
import { model, Schema } from 'mongoose'

const contactSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default model<IContact>('Contact', contactSchema)
