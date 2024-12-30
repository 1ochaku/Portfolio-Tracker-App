import React from "react";

const PerformanceMetrics = ({ stocks }) => {
    // this gives us the avg return of our portfolio
    const averageReturn = stocks.length > 0 
        ? stocks.reduce((sum, stock) => {
            if (stock.qty * stock.buyPrice !== 0) {
                return sum + ((stock.profitLoss / (stock.qty * stock.buyPrice)) * 100);
            }
            return sum;
        }, 0) / stocks.length
        : 0;

    return (
        <div className="performance-metrics">
            <h3>Average Return: { averageReturn.toFixed(2) }%</h3>
        </div>
    );
};

export default PerformanceMetrics;
