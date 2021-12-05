import logger from './utils/logger'
import environmentVariables from './config/env'
import app from './app'
import connectDB from './config/database'

const { PORT } = environmentVariables

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      logger.log({ level: 'info', message: `Server started on port ${PORT}` })
    )
  })
  .catch((error) => {
    logger.error(error)
    process.exit()
  })
