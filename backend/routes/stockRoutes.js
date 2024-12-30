const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// connects to different services
// for getting the stock data
router.get('/stocks', stockController.getStocks);
// for adding into the stock pool
router.post('/stocks', stockController.addStock);
// for getting the current price of each stock
router.get('/stocks-price/:symbol', stockController.getStockPrice);
// for deleting the stock
router.delete('/stocks/:symbol', stockController.deleteStock);
// for editing the stock
router.put('/stocks/:symbol', stockController.editStock);

module.exports = router;