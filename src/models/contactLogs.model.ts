import { Schema, model, Types } from 'mongoose'
import { IContactLog } from '../types/contactLog'

const contactChangeSchema = new Schema({
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
    maxlength: 255
  }
})

const contactLogSchema = new Schema({
  status: {
    enum: ['created'],
    required: true
  },
  from: { type: contactChangeSchema, required: true },
  to: { type: contactChangeSchema, required: true },

  contact: {
    type: Types.ObjectId,
    ref: 'contacts',
    required: true
  }
})

export default model<IContactLog>('contactLogs', contactLogSchema)
