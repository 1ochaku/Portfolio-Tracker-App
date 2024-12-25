import React, { createContext, useContext, useState } from "react";

const StocksContext = createContext();

export const useStocks = () => {
    return useContext(StocksContext);
};

const StocksProvider = ({ children }) => {
    const [stocks, setStocks] = useState([
        {
            symbol: 'TSLA',
            name: 'Tesla Inc',
            qty: 10,
            profitLoss: 1000,
        },
        {
            symbol: 'AAPL',
            name: 'Apple Inc',
            qty: 15,
            profitLoss: 1200,
        },
    ]);

    const addStock = (newStock) => {
        setStocks((prevStocks) => [...prevStocks, newStock]);
    };

    const deleteStock = (symbol) => {
        setStocks((prevStocks) => prevStocks.filter((stock) => stock.symbol !== symbol));
    };

    const editStock = (updatedStock) => {
        setStocks((prevStocks) =>
            prevStocks.map((stock) =>
                stock.symbol === updatedStock.symbol ? updatedStock : stock
            )
        );
    };

    return (
        <StocksContext.Provider value={{stocks, addStock, deleteStock, editStock}}>
            {children}
        </StocksContext.Provider>

    );
}

export default StocksProvider;
