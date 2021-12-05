import mongoose from 'mongoose'
import environmentVariables from './env'

const DB_URI: string = environmentVariables.DB_URI

async function connectDB() {
  return mongoose.connect(DB_URI)
}

export default connectDB
