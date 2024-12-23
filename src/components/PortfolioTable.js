import React from "react";
import TableRow from "./TableRow";
import './PortfolioTable.css';

const PortfolioTable = ({ stocks, onEdit, onDelete }) => {
    return (
        <div className="portfolio-table">
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Total Quantity</th>
                        <th>Buying Price per Stock</th>
                        <th>Current Price per Stock</th>
                        <th>Current Profit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => (
                        <TableRow
                            key={stock.symbol}
                            stock={stock}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PortfolioTable;