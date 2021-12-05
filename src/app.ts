import express, { Request, Response } from 'express'
import helmet from 'helmet'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

app.get('/ping', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send('Pong!')
})

export default app
