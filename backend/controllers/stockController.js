const Stock = require('../models/stockModel');
const stockService = require('../services/stockService');

// Fetch all stocks from the database
const getStocks = async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stocks from database' });
    }
};

// Adding new stocks
const addStock = async (req, res) => {
    try {
        const { symbol, name, qty, buyPrice } = req.body;
        const newStock = new Stock({ symbol, name, qty, buyPrice });
        await newStock.save();
        res.status(201).json(newStock);
    } catch (error) {
        res.status(500).json({ error: 'Error adding stock' });
    }
};

// Get stock price
const getStockPrice = async (req, res) => {
    const { symbol } = req.params;
    
    try {
        const priceData = await stockService.fetchStockPrice(symbol);
        if (!priceData) {
            res.status(404).json({ error: 'Stock Price not found' });
        }
        res.json(priceData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock price' });
    }
};

// Delete stock
const deleteStock = async (req, res) => {
    const { symbol } = req.params;

    try {
        const deletedStock = await Stock.findOneAndDelete({ symbol });
        if (!deletedStock) {
            return res.status(404).json({ error: 'Stock not found' });
        }
        res.json({ message: 'Stock deleted successfully', deletedStock });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting stock' });
    }
}

// Edit stock
const editStock = async (req, res) => {
    const { symbol } = req.params;
    const { name, qty, buyPrice, newSymbol } = req.body;

    try {
        const updatedStock = await Stock.findOneAndUpdate(
            { symbol },
            {
                name, qty, buyPrice, 
                ...(newSymbol && {symbol: newSymbol}),
            },
            { new: true }
        );
        if (!updatedStock) {
            return res.status(404).json({ error: 'Stock not found' });
        }
        res.json(updatedStock);
    } catch (error) {
        res.status(500).json({ error: 'Error editing stock' });
    }
}

module.exports = { getStocks, addStock, getStockPrice , deleteStock, editStock};