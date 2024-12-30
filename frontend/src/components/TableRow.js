import React from "react";
import './TableRow.css';

const TableRow = ({ stock, onEdit, onDelete }) => {
    // structures the content of the rows in the table and show the edit and delete button
    return (
        <tr>
            <td>{stock.symbol}</td>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.buyPrice}</td>
            <td>{stock.currentPrice}</td>
            <td>{stock.profitLoss}</td>
            <td>
                <button onClick={() => onEdit(stock)}>Edit</button>
                <button onClick={()=> onDelete(stock.symbol)}>Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;