// src/config/logger.js
const winston = require('winston');
const config = require('./config');
const path = require('path');
const fs = require('fs');

// Ensure logs directory exists
const logDirectory = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const userIdFormat = winston.format((info) => {
  if (info.userId) {
    info.message = `[UserID: ${info.userId}] ${info.message}`;
  }
  return info;
});

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    enumerateErrorFormat(),
    userIdFormat(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message, userId }) => userId ? `${level}: [UserID: ${userId}] ${message}` : `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
    new winston.transports.File({
      filename: path.join(logDirectory, 'app.log'),
      level: 'info',
    }),
    new winston.transports.File({
      filename: path.join(logDirectory, 'error.log'),
      level: 'error',
    }),
  ],
  defaultMeta: {}, // Initialize with empty object
});

module.exports = logger;
