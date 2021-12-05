import dotenv from 'dotenv'
dotenv.config()

const getEnvironmentVariable = (name: String): String => {
  const prefix: String = process.env.NODE_ENV === 'test' ? 'TEST_' : ''
  return String(process.env[`${name}`])
}

export default {
  DB_URI: getEnvironmentVariable('DB_URL'),
  PORT: getEnvironmentVariable('PORT'),
  NODE_ENV: process.env.NODE_ENV
}
