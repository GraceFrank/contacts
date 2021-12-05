import Logger from '../utils/logger'
import env from '../config/env'
import ErrorResponse from 'Error'
import { NextFunction, Request, Response } from 'express'

const handleErrors = async (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  Logger.error(`${err.message}\n${err.errors}`)

  res.status(500).json({
    status: err.status ?? 'error',
    message: err.message ?? 'something went wrong contact admin',
    errors: env.NODE_ENV !== 'production' ? err.errors : ''
  })
}

export default handleErrors
