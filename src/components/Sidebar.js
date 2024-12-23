import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/myportfolio">
                        My PortFolio
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;