import React from 'react';
import NavDashboard from '../Navbar/Nav.dashboard';
import Dashboard from './Dashboard';

const DashboardHed = () => {
    return (
        <>
        <NavDashboard></NavDashboard>
            <Dashboard></Dashboard>
        </>
    );
};

export default DashboardHed;