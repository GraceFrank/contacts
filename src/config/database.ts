import mongoose from 'mongoose'
import environmentVariables from './env'

const DB_URI: string = environmentVariables.DB_URI

async function connectDB() {
  return mongoose.connect(DB_URI)
}

export default connectDB

export async function closeDB() {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

export async function clearDB(Model) {
  if (Model) {
    await Model.deleteMany()
    return
  }
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}
