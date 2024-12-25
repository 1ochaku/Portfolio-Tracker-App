import React from "react";

const PerformanceMetrics = ({ data }) => {
    const averageReturn = data.reduce((sum, stock) => sum + ((stock.profitLoss / stock.totalPaidPrice) * 100), 0) / data.length;
    return (
        <div className="performance-metrics">
            <h3>Average Return: { averageReturn.toFixed(2)}%</h3>
        </div>
    )
};

export default PerformanceMetrics;