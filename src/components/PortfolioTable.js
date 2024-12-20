import React from "react";

const PortfolioTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Avg Price</th>
                    <th>Current Price</th>
                    <th>Total Paid Price</th>
                    <th>Total Value</th>
                    <th>P/L</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.symbol}>
                        <td>{item.symbol}</td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.avgPrice}</td>
                        <td>{item.currentPrice}</td>
                        <td>{item.totalPaidPrice}</td>
                        <td>{item.totalValue}</td>
                        <td style={{ color: item.profitLoss >= 0 ? 'green' : 'red' }}>
                            {item.profitLoss.toFixed(2)}
                        </td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PortfolioTable;