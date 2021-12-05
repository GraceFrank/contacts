import dotenv from 'dotenv'
dotenv.config()

const getEnvironmentVariable = (name: string): string => {
  const prefix: string = process.env.NODE_ENV === 'test' ? 'TEST_' : ''
  return process.env[`${name}`]
}

export default {
  DB_URI: getEnvironmentVariable('DB_URI'),
  PORT: getEnvironmentVariable('PORT'),
  NODE_ENV: process.env.NODE_ENV
}
