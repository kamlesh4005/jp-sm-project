// src/controllers/event.controller.js
const { getEventDetails } = require('../services/event.service.js');

const fetchEventDetails = async (req, res) => {
  const { eventId } = req.params;
  try {
    const eventDetails = await getEventDetails(eventId);
    res.json(eventDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event details', error: error.message });
  }
};

module.exports = {
  fetchEventDetails,
};
