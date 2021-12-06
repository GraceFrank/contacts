import { Schema, model, Types } from 'mongoose'
import { ContactLogStatus, IContactLog } from '../types/contactLog'

const contactChangeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 255
    },

    lastName: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 255
    },

    email: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 255,
      unique: true
    },

    phone: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      minlength: 4,
      maxlength: 15
    }
  },
  { timestamps: true }
)

const contactLogSchema = new Schema({
  status: {
    type: String,
    enum: [ContactLogStatus.CREATED, ContactLogStatus.UPDATED],
    required: true
  },
  from: { type: contactChangeSchema },
  to: { type: contactChangeSchema, required: true },
  contactId: {
    type: Types.ObjectId,
    ref: 'contacts',
    required: true
  }
})

export default model<IContactLog>('contact-logs', contactLogSchema)
