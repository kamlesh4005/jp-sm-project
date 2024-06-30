const logger = require('../config/logger');

const logUserMiddleware = (req, res, next) => {
  if (req.user) {
    logger.defaultMeta = { userId: req.user.id };
  } else {
    delete logger.defaultMeta.userId;
  }
  next();
};

module.exports = logUserMiddleware;
