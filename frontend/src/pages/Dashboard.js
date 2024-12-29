import React from "react";
import './Dashboard.css';
import PieChart from "../components/PieChart";
import PortFolioSummary from "../components/PortFolioSummary";
import PerformanceMetrics from "../components/PerformanceMetrics";
import { useStocks } from "../context/StocksProvider";

const Dashboard = () => {
    const { stocks, loading, error } = useStocks();

    // If stocks are loading
    if (loading) {
        return (
            <div className="Dashboard">
                <div className="Loading">Loading Dashboard...</div>
            </div>
        );
    }

    // If stocks are empty
    if (stocks.length === 0) {
        return (
            <div className="Empty-Dashboard">
                <h1>You haven't bought any stocks yet.</h1>
            </div>
        );
    }

    // If stocks are available
    return (
        <div className="Dashboard">
            <PortFolioSummary stocks={stocks} />
            <PerformanceMetrics stocks={stocks} />
            <div className="PieChartWrapper">
                <PieChart stocks={stocks} />
            </div>
        </div>
    );
};

export default Dashboard;
