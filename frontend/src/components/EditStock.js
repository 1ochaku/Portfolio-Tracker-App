import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStocks } from "../components/StocksProvider";
import './EditStock.css';

const EditStock = () => {
    const { symbol } = useParams();
    const { stocks, editStock } = useStocks(); 
    const stock = stocks.find((s) => s.symbol === symbol); 
    const [qty, setQty] = useState(stock?.qty || 0); 
    const navigate = useNavigate();

    const handleQtyChange = (e) => {
        setQty(e.target.value);
    };

    const saveChanges = () => {
        if (stock) {
            editStock({ ...stock, qty });
            navigate("/myportfolio");
        }
    }

    const cancelEdit = () => {
        navigate("/myportfolio");
    }

    return (
        <div className="edit-page">
            <h2>Edit Stock</h2>
            <p><strong>Symbol: </strong> {stock?.symbol}</p>
            <p><strong>Name: </strong> {stock?.name}</p>
            <div>
                <label htmlFor="qty">Quantity:</label>
                <input
                    id="qty"
                    type="number"
                    value={qty}
                    onChange={handleQtyChange}
                />
            </div>
            <div>
                <button onClick={saveChanges}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
            </div>
        </div>
    );
};

export default EditStock;