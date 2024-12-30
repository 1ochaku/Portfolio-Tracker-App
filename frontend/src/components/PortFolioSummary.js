import React from "react";

const PortFolioSummary = ({ stocks }) => {
    // computes the total portfolio value and shows the best performer among all stocks
    const totalPortfolioValue = (stocks.reduce((sum, stock) => sum + (stock.qty * stock.currentPrice), 0)).toFixed(2);
    
    const bestPerformer = stocks.reduce((best, stock) => (stock.profitLoss > best.profitLoss ? stock : best), stocks[0]);

    const bestPerformerProfit = Number(bestPerformer.profitLoss);
    const formattedProfit = isNaN(bestPerformerProfit) ? '0.00' : bestPerformerProfit.toFixed(2);

    return (
        <div className="portfolio_summary">
            <h3>Total Portfolio Value: ${totalPortfolioValue}</h3>
            <h3>Best Performer: {bestPerformer.name} (${formattedProfit} profit)</h3>
        </div>
    );
};

export default PortFolioSummary;
