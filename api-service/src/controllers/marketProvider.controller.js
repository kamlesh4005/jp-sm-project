const { marketProviderService } = require('../services');

const getMarketsMenu = async (req, res) => {
  // Fetch data from the service
  const menu = await marketProviderService.getMarketsMenu();
  res.json(menu);
};

module.exports = {
  getMarketsMenu,
};
