import React from 'react';
import RobogradingFeed from '../Components/HeaderCo/Dashboard/RobogradingFeed';
import NavDashboard from '../Navbar/Nav.dashboard';

const FeedDashboardPage = () => {
    return (
        <div>
            <NavDashboard></NavDashboard>
            <RobogradingFeed></RobogradingFeed>
        </div>
    );
};

export default FeedDashboardPage;