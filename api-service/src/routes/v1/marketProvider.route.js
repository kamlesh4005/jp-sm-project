const express = require('express');
const marketProviderController = require('../../controllers/marketProvider.controller');

const router = express.Router();

router.get('/menu', marketProviderController.getMarketsMenu);

module.exports = router;
