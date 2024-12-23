import React, { useState } from "react";
import "./AddStock.css";

const AddStock = ({ onAddStock }) => {
    const [formData, setFormData] = useState({
        name: '',
        symbol: '',
        qty: '',
        buyPrice: 'NA', //need to be set through api
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.ticker && formData.qty && formData.buyPrice) {
            onAddStock(formData);
            setFormData({ name: '', ticker: '', qty: '', buyPrice: '' });
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <form className="add-stock-form" onSubmit={handleSubmit}>
            <h2>Add Stock</h2>
            <input
                name="name"
                placeholder="Stock Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                name="symbol"
                placeholder="Stock Symbol"
                value={formData.symbol}
                onChange={handleChange}
                required/>
            <input
                name="qty"
                type="number"
                placeholder="Quantity"
                value={formData.qty}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Stock</button>
        </form>
    );
};

export default AddStock;