import './MyPortfolio.css';
import React from "react";
import AddStock from "../components/AddStock";
import PortfolioTable from "../components/PortfolioTable";
import { useNavigate } from "react-router-dom";
import { useStocks } from "../context/StocksProvider";

const MyPortfolio = () => {
    const { stocks, addStock, deleteStock, Loading } = useStocks();
    const navigate = useNavigate();

    const editStock = (stock) => {
        navigate(`/edit/${stock.symbol}`);
    };

    // Check if stocks are loading
    if (Loading) {
        return (
            <div className="my-portfolio">
                <h3>Loading...</h3>
            </div>
        );
    }

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
