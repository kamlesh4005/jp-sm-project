const logger = require('./config/logger');

// Override console.log to use logger.info
global.console.log = (message, ...args) => {
  logger.info(message, ...args);
};

// Override console.error to use logger.error
global.console.error = (message, ...args) => {
  logger.error(message, ...args);
};
