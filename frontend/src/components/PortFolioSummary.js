import React from "react";

const PortFolioSummary = ({ stocks }) => {
    const totalPortfolioValue = stocks.reduce((sum, stock) => sum + (stock.qty*stock.currentPrice), 0);
    const bestPerformer = stocks.reduce((best, stock) => (stock.profitLoss > best.profitLoss ? stock : best), stocks[0]);

    return (
        <div className="portfolio_summary">
            <h3>Total PortFolio Value: ${totalPortfolioValue}</h3>
            <h3>Best Performer: {bestPerformer.name} (${bestPerformer.profitLoss} profit)</h3> 
        </div>
    );
};

export default PortFolioSummary;