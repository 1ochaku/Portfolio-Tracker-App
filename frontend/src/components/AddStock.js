import React, { useState } from "react";
import "./AddStock.css";

const AddStock = ({ onAddStock }) => {
    // the contents required for the stock that has to be added
    const [formData, setFormData] = useState({
        name: '',
        symbol: '',
        qty: '',
        buyPrice: '',
    });

    // on entering the values in the placeholder, set the values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // on tapping the save button, save the data
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.symbol && formData.qty && formData.buyPrice) {
            onAddStock(formData);
            setFormData({ name: '', symbol: '', qty: '', buyPrice: '' });
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
            <input
                name="buyPrice"
                type="number"
                placeholder="Buy Price"
                value={formData.buyPrice}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Stock</button>
        </form>
    );
};

export default AddStock;