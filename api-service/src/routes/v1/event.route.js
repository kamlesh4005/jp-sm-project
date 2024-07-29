// src/routes/v1/event.route.js
const express = require('express');
const { fetchEventDetails } = require('../../controllers/event.controller');

const router = express.Router();

router.get('/detail/:eventId', fetchEventDetails);

module.exports = router;
