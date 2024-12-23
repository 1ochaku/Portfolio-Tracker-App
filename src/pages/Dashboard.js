import React, { useState } from "react";
import './Dashboard.css';
import PieChart from "../components/PieChart";
import PortFolioSummary from "../components/PortFolioSummary";
import PerformanceMetrics from "../components/PerformanceMetrics";

const Dashboard = () => {
    const [data, setData] = useState([
        {
            symbol: 'TSLA',
            name: 'Tesla Inc',
            qty: 10,
            currentPrice: 700,
            totalPaidPrice: 6000,
            totalValue: 7000,
            profitLoss: 1000,
        },
        {
            symbol: 'NYA',
            name: 'New York Times',
            qty: 10,
            currentPrice: 700,
            totalPaidPrice: 5000,
            totalValue: 8000,
            profitLoss: 100,
        },
    ]);

    return (
        <div className="Dashboard">
            <PortFolioSummary data={data} />
            <PerformanceMetrics data={ data} />
            <PieChart data={data} />
        </div>
    );
}

export default Dashboard;