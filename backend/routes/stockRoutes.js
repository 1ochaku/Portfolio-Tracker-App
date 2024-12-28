const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.get('/stocks', stockController.getStocks);
router.post('/stocks', stockController.addStock);
router.get('/stocks-price/:symbol', stockController.getStockPrice);
router.delete('/stocks/:symbol', stockController.deleteStock);
router.put('/stocks/:symbol', stockController.editStock);

module.exports = router;