import { NextFunction, Request } from 'express'
import Joi from 'joi'

export default function validationMiddleware(
  JoiSchema: any
): (req: Request, _res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = JoiSchema.validate(req.body)

    if (error) {
      next({
        statusCode: 400,
        errors: error,
        message: error.message
      })
    } else next()
  }
}
