import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StocksContext = createContext();

export const useStocks = () => {
    return useContext(StocksContext);
};

const StocksProvider = ({ children }) => {
    const [stocks, setStocks] = useState([]);

    // fetching the stocks from database via backend
    const fetchStocks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/stocks");
            console.log("Fetched stocks:", response.data); 
            const stocksData = response.data;

            const updatedStocks = await Promise.all(
                stocksData.map(async (stock) => {
                    const stockPriceData = await fetchStockPrice(stock.symbol);
                    const currentPrice = stockPriceData ? stockPriceData.currentPrice : stock.currentPrice;
                    const profitLoss = currentPrice
                        ? ((currentPrice - stock.buyPrice) * stock.qty).toFixed(2)
                        : stock.profitLoss;

                    return { ...stock, currentPrice, profitLoss };
                })
            );

            setStocks(updatedStocks);
        } catch (error) {
            console.error("Error fetching stocks:", error.message);      
        }
    };

    // fetching the stock price from api
    const fetchStockPrice = async (symbol) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/stocks-price/${symbol}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching price for ${symbol}:`, error.message);
            return null;
        }
    };

    // adding new stock to the database
    const addStock = async (newStock) => {
        try {
            const response = await axios.post("http://localhost:5000/api/stocks", newStock);
            setStocks((prevStocks) => [...prevStocks, response.data]);
        } catch (error) {
            console.error("Error adding stock:", error.message);
        }
    };

    // deleting a stock
    const deleteStock = async (symbol) => {
        try {
            await axios.delete(`http://localhost:5000/api/stocks/${symbol}`);
            setStocks((prevStocks) => prevStocks.filter((stock) => stock.symbol !== symbol));
        } catch (error) {
            console.error("Error deleting stock:", error.message);
        }
    }

    // editing a stock
    const editStock = async (updatedStock) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/stocks/${updatedStock.symbol}`, updatedStock);
            setStocks((prevStocks) =>
                prevStocks.map((stock) =>
                    stock.symbol === updatedStock.symbol ? response.data : stock
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
        <StocksContext.Provider value={{stocks, addStock, deleteStock, editStock}}>
            {children}
        </StocksContext.Provider>

    );
}

export default StocksProvider;

