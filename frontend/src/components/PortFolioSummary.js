import React from "react";

const PortFolioSummary = ({ data }) => {
    const totalPortfolioValue = data.reduce((sum, stock) => sum + stock.totalValue, 0);
    const bestPerformer = data.reduce((best, stock) => (stock.profitLoss > best.profitLoss ? stock : best), data[0]);

    return (
        <div className="portfolio_summary">
            <h3>Total PortFolio Value: ${totalPortfolioValue}</h3>
            <h3>Best Performer: {bestPerformer.name} (${bestPerformer.profitLoss} profit)</h3> 
        </div>
    );
};

export default PortFolioSummary;