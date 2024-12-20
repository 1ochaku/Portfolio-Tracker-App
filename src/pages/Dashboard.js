import React, { useState } from "react";
import './Dashboard.css';
import PortfolioTable from '../components/PortfolioTable';
import PieChart from "../components/PieChart";

const Dashboard = () => {
    const [data, setData] = useState([
        {
            symbol: 'TSLA',
            name: 'Tesla Inc',
            qty: 10,
            avgPrice: 600,
            currentPrice: 700,
            totalPaidPrice: 6000,
            totalValue: 7000,
            profitLoss: 1000,
        },
    ]);

    return (
        <div className="Dashboard">
            <PortfolioTable data={data} />
            <PieChart data={data}/>
        </div>
    );
}

export default Dashboard;