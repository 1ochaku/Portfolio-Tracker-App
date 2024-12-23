import React from "react";

const TableRow = ({stock, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{stock.symbol}</td>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.profitLoss}</td>
            <td>
                <button onClick={() => onEdit(stock)}>Edit</button>
                <button onClick={()=> onDelete(stock.symbol)}>Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;