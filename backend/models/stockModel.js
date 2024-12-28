const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    buyPrice: { type: Number, required: true },
    profitLoss: { type: Number, required: null },
    currentPrice: { type: Number, required: null },
});

module.exports = mongoose.model('Stock', StockSchema);