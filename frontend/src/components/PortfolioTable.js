import React from "react";
import TableRow from "./TableRow";
import './PortfolioTable.css';

const PortfolioTable = ({ stocks, onEdit, onDelete }) => {
    // loads the portfolio table
    return (
        <div className="portfolio-table">
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Total Quantity</th>
                        <th>Buy Price</th>
                        <th>Current Price</th>
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