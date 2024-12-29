import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStocks } from "../context/StocksProvider";
import './EditStock.css';

const EditStock = () => {
    const { symbol } = useParams();
    const { stocks, editStock } = useStocks(); 
    const stock = stocks.find((s) => s.symbol === symbol); 

    const [formData, setFormData] = useState({
        name:stock?.name || "",
        symbol:stock?.symbol || "",
        qty:stock?.qty || 0,
        buyPrice:stock?.buyPrice || 0,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:name==="symbol" ? value.toUpperCase() : value,
        }))
    };

    const saveChanges = () => {
        if (stock) {
            const updatedStock = {
                ...stock,
                ...formData,
                qty: parseFloat(formData.qty),
                buyPrice: parseFloat(formData.buyPrice),
            }

            editStock(updatedStock);
            navigate("/myportfolio");
        }
    }

    const cancelEdit = () => {
        navigate("/myportfolio");
    }

    return (
        <div className="edit-page">
            <h2>Edit Stock</h2>
            <div>
                <label htmlFor="name">Stock Name: </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="symbol">Stock Symbol: </label>
                <input
                    id="symbol"
                    name="symbol"
                    type="text"
                    value={formData.symbol}
                    onChange={handleChange}
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="qty">Quantity: </label>
                <input
                    id="qty"
                    name="qty"
                    type="number"
                    value={formData.qty}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="buyPrice">Buy Price: </label>
                <input
                    id="buyPrice"
                    name="buyPrice"
                    type="number"
                    value={formData.buyPrice}
                    onChange={handleChange}
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