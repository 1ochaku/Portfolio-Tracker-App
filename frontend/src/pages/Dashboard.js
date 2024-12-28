import React, { useState } from "react";
import './Dashboard.css';
import PieChart from "../components/PieChart";
import PortFolioSummary from "../components/PortFolioSummary";
import PerformanceMetrics from "../components/PerformanceMetrics";
import { useStocks } from "../context/StocksProvider";

const Dashboard = () => {
    const { stocks } = useStocks();

    return (
        <div className="Dashboard">
            <PortFolioSummary stocks={stocks} />
            <PerformanceMetrics stocks={stocks} />
            <div className="PieChartWrapper">
                <PieChart stocks={stocks} />
            </div>
        </div>
    );
}

export default Dashboard;