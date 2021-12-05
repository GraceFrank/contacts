import winston, { format } from 'winston'
import winstonTimestampColorize from 'winston-timestamp-colorize'

export const logProps = {
  colors: {
    error: 'brightRed',
    warn: 'brightYellow',
    info: 'brightCyan',
    verbose: 'brightWhite',
    debug: 'brightBlue',
    silly: 'brightMagenta'
  },
  filename: 'debug.log'
}

winston.format.colorize().addColors(logProps.colors)

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize({ all: true }),
        format.simple(),
        winstonTimestampColorize({ color: 'green' }),
        format.printf(
          (msg) => `${msg.level}: ${msg.message} - ${msg.timestamp}`
        )
      )
    }),
    new winston.transports.File({
      filename: logProps.filename,
      format: format.combine(
        format.timestamp(),
        format.simple(),
        format.printf(
          (msg) => `${msg.level}: ${msg.message} - ${msg.timestamp}`
        )
      )
    })
  ]
}

const logger = winston.createLogger(options)

export default logger
