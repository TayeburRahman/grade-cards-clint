import React, { Fragment } from 'react';
import bannerImg from '../../../image/Group+662.png'
import { Box, Button, Typography } from '@mui/material';
import Navbars from '../../../Navbar/Navbars';
import './WhyRobograding.css'
 
const WhyRobogradingBanner = () => {
    return (
        <Fragment> 
        <div id='AboutRoboBanner' className='row' 
         style={{margin:'0px', padding:'0px', alignContent: 'center'}}
         >
     <Navbars></Navbars>
            <div className='row d-flex mt-5  '
            style={{ alignItems: 'center' }}
            >
              <div className='marginTop-50 mb-2 col-md-6 col-sm-12 col-lg-6 d-grid p-5'>
                <Box className='mb-2 mt-2'>
                <Typography variant="h4" className='bannertext mt-5 mb-4 textLeft' gutterBottom component="div" style={{color:'white'}}> 
                Robograding is <br></br> here.
                </Typography>
                <Typography className='textLeft bannertextP ' variant="subtitle2" style={{color:'white', fontSize: '22px', lineHeight: '26px' }}> 
                The quick and accurate way to grade cards.
                </Typography>
                <Typography variant="subtitle1" className='textLeft mt-3' gutterBottom 
                      sx={{ fontFamily: 'cursive', }} 
                      style={{fontWeight: '200 !important', fontSize:'16px',color:'white'}}
                      >
                      Did you spend a fortune getting your cards graded while having to wait forever? And when you finally got it, found the grades extremely confusing. RoboGrading is changing that for good. It’s 100% transparent, more accurate than human-grading, and 10-times faster!
                     </Typography>
                </Box>
                <Box className='textLeft'>
                 <button class="button button1">Grade your cards with AI!</button>
                </Box>
              </div>
              <div className='col-md-6 col-sm-12 col-lg-6 p-5 mt-5 mb-2 paddingDiv'>
                  <img
                  className='imageBanner'
                    src={bannerImg}
                    alt='Standard Turnaround Time'
                    loading="lazy"
                    width="80% !important"
                  />
             </div>
            </div>
         </div> 
    </Fragment>
    );
};

export default WhyRobogradingBanner;