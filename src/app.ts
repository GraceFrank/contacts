import express, { Request, Response } from 'express'
import helmet from 'helmet'
import morgan from './config/morgan'

const app = express()
app.use(morgan)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

app.get('/ping', async (req: Request, res: Response): Promise<Response> => {
  return res.status(500).send('Pong!')
})

export default app
