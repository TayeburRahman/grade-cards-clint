import React, { Fragment } from 'react';
import SingleCardD from '../Components/HeaderCo/Dashboard/SingleCardD';
import NavDashboard from '../Navbar/Nav.dashboard';

const FeedCardDtl = () => {
    return (
        <Fragment>
            <NavDashboard></NavDashboard>
            <SingleCardD></SingleCardD>
        </Fragment>
    );
};

export default FeedCardDtl;