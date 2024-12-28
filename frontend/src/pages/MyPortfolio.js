import './MyPortfolio.css';
import React from "react";
import AddStock from "../components/AddStock";
import PortfolioTable from "../components/PortfolioTable";
import { useNavigate } from "react-router-dom";
import { useStocks } from "../context/StocksProvider";

const MyPortfolio = () => {
    const { stocks, addStock, deleteStock } = useStocks();
    const navigate = useNavigate();

    const editStock = (stock) => {
        navigate(`/edit/${stock.symbol}`);
    };

    return (
        <div className="my-portfolio">
            <div className="form-container">
                <AddStock onAddStock={addStock} />
            </div>
            <div className="table-container">
                <PortfolioTable
                    stocks={stocks}
                    onEdit={editStock}
                    onDelete={deleteStock}
                />
            </div>
        </div>
    );
};

export default MyPortfolio;
