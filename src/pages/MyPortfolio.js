import React, { useState } from "react";
import AddStock from "../components/AddStock";
import PortfolioTable from "../components/PortfolioTable";
import './MyPortfolio.css'

const MyPortfolio = () => {
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

    const addStock = (stock) => {
        const newStock = {
            symbol: stock.symbol,
            name: stock.name,
            qty: stock.qty,
            profitLoss: 0,
            buyPrice: stock.buyPrice,
        };
        setStocks([...stocks, newStock]);
    };

    const editStock = (stockToEdit) => {
        console.log("Editing,stockToEdit");
    }

    const deleteStock = (symbol) => {
        setStocks(stocks.filter(stock => stock.symbol !== symbol));
    }

    return (
        <div className="my-portfolio">
            <div className="form-container">
                <AddStock onAddStock={addStock} />
            </div>
            <div className="table-container">
                <PortfolioTable stocks={stocks} onEdit={editStock} onDelete={deleteStock}/>
            </div>
        </div>
    );
};

export default MyPortfolio;