import React, { Fragment } from 'react';
import bannerImg from '../../../image/Group+662.png'
import { Box, Button, Typography } from '@mui/material';
import Navbars from '../../../Navbar/Navbars';
import './AboutRoboBanner.css'
 
const AboutRoboBanner = () => {
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
                     <Box className='mb-4 mt-2'>
                     <Typography variant="h4" className='bannertext mt-5 mb-5 textLeft' gutterBottom component="div" style={{color:'white'}}> 
                     The most accurate, transparent and fastest way to grade your cards!
                     </Typography>
                     <Typography className='textLeft bannertextP' variant="subtitle2" style={{color:'white', fontSize: '22px', lineHeight: '26px' }}>Grade with Artificial Intelligence! <br></br>
                     5,000+ happy collectors, same-day grading available.</Typography>
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
                         width="100%"
                       />
                  </div>
                 </div>
        </div> 
         </Fragment>
    );
};

export default AboutRoboBanner;