const logger = require('../config/logger');

const logUserMiddleware = (req, res, next) => {
    if (req.user && req.user.id) {
      logger.defaultMeta = { userId: req.user.id };
    } else {
      logger.defaultMeta = {};
    }
    next();
  };
module.exports = logUserMiddleware;
