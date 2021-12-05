import logger from './utils/logger'
import environmentVariables from './config/env'
import app from './app'

const { PORT } = environmentVariables

app.listen(PORT, () =>
  logger.log({ level: 'info', message: `Server started on port ${PORT}` })
)
