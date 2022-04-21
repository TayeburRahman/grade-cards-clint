import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
import feedBanner from '../../../image/feed-hero-splash.jpeg';
import CustomPaginationActionsTable from './FeedCardMain';
import './RobogradingFeed.css';

const RobogradingFeed = () => {
    return (
        <Fragment>
            <div className='feedBanner row d-flex'>
                <div className='textBannerDiv d-flex textLeft col-md-6 col-sm-12 col-lg-7'>
                 <div className='FBText'>
                 <Typography variant="h3" gutterBottom component="div">
                   Robograding Feed
                 </Typography>
                 <Typography variant="subtitle2" gutterBottom component="div">
                 Get a live view of all cards we grade.
                 </Typography>
                 </div>
                </div>
                <div className='col-md-6 col-sm-12 col-lg-5'>
                   <img
                    alt="feed banner image"
                    loading="lazy"
                    src={feedBanner}
                   />
                </div>
            </div>
            <div className='feedCardMain'>
                 <CustomPaginationActionsTable></CustomPaginationActionsTable>
            </div>
        </Fragment>
    );
};

export default RobogradingFeed;