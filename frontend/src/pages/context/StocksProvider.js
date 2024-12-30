import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const StocksContext = createContext();

export const useStocks = () => {
    return useContext(StocksContext);
};

const StocksProvider = ({ children }) => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true); // to prevent rendering without loading data
    const [error, setError] = useState(null);

    // for finding the stock price and calculate the profit and loss
    const updateStockPriceAndProfitLoss = async (stock) => {
        try {
            const stockPriceData = await fetchStockPrice(stock.symbol);
            const currentPrice = stockPriceData ? stockPriceData.currentPrice : stock.currentPrice;
            const profitLoss = currentPrice
                ? ((currentPrice - stock.buyPrice) * stock.qty).toFixed(2)
                : stock.profitLoss;

            return { ...stock, currentPrice, profitLoss };
        } catch (error) {
            console.error(`Error updating stock price and profit/loss for ${stock.symbol}:`, error.message);
            return stock; // returning the stock without any updates
        }
    };

    // fetching the stocks from database via backend
    const fetchStocks = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/stocks`);
            // console.log("Fetched stocks:", response.data); 
            const stocksData = response.data;

            const updatedStocks = await Promise.all(
                stocksData.map(async (stock) => await updateStockPriceAndProfitLoss(stock))
            );

            setStocks(updatedStocks);
            setLoading(false); // Set loading to false once data is fetched

        } catch (error) {
            console.error("Error fetching stocks:", error.message);    
            setError(error.message); // Set error state if the fetch fails
            setLoading(false);
        }
    };

    // fetching the stock price from api
    const fetchStockPrice = async (symbol) => {
        try {
            const response = await axios.get(`${API_URL}/api/stocks-price/${symbol}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching price for ${symbol}:`, error.message);
            return null;
        }
    };

    // adding new stock to the database
    const addStock = async (newStock) => {
        try {
            const response = await axios.post(`${API_URL}/api/stocks`, newStock);
            const updatedStock = await updateStockPriceAndProfitLoss(newStock);
            setStocks((prevStocks) => [...prevStocks, updatedStock]);
        } catch (error) {
            console.error("Error adding stock:", error.message);
        }
    };

    // deleting a stock
    const deleteStock = async (symbol) => {
        try {
            await axios.delete(`${API_URL}/api/stocks/${symbol}`);
            setStocks((prevStocks) => prevStocks.filter((stock) => stock.symbol !== symbol));
        } catch (error) {
            console.error("Error deleting stock:", error.message);
        }
    }

    // editing a stock
    const editStock = async (updatedStock) => {
        try {
            const response = await axios.put(`${API_URL}/api/stocks/${updatedStock.symbol}`, updatedStock);
            const updatedStockWithPrice = await updateStockPriceAndProfitLoss(updatedStock);

            setStocks((prevStocks) =>
                prevStocks.map((stock) =>
                    stock.symbol === updatedStock.symbol ? updatedStockWithPrice : stock
                )
            );
        } catch (error) {
            console.error("Error editing stock:", error.message);
        }
    }

    // fetching stocks on initial load
    useEffect(() => {
        fetchStocks();
    }, []);

    return (
        <StocksContext.Provider value={{stocks, loading, error, addStock, deleteStock, editStock}}>
            {children}
        </StocksContext.Provider>

    );
}

export default StocksProvider;

