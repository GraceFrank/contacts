import express, { Request, Response } from 'express'
import helmet from 'helmet'
import morgan from './config/morgan'
import handleErrors from './controllers/error.controller'
import router from './routes/index'

const app = express()
app.use(morgan)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

app.use('/api', router)
app.get('/ping', async (req: Request, res: Response): Promise<Response> => {
  return res.status(500).send('Pong!')
})
app.use(handleErrors)

export default app
