const axios = require('axios');

const fetchStockPrice = async (symbol) => {
    try {
        const response = await axios.get('https://finnhub.io/api/v1/quote', {
            params: {
                symbol,
                token: process.env.FINNHUB_API_KEY,  // add your own api keys
            },
        });

        const { c: currentPrice, d: change, dp: changePercent } = response.data;

        // Log response to check if it's returning data
        // console.log(`Fetched price for ${symbol}:`, response.data);

        return { symbol, currentPrice, change, changePercent };
    } catch (error) {
        console.error('Error fetching stock price:', error.message);
        res.status(500).json({ error: 'Failed to fetch stock price' });
    }
};

module.exports = { fetchStockPrice };

