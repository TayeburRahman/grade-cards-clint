import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../image/mobail.png';
import './BannerCo.css';


const BannerCo = () => {
    return (
        <div id='Banner' className='row d-grid' 
        style={{margin:'0px', padding:'0px', alignContent: 'center', justifyItems: 'center'}}
        >
                  <div className='row d-flex mt-5 bannerDiv'
                 style={{    alignItems: 'center'  }}
                 >
                      <div className='marginTop-50   mb-2 col-md-6 col-sm-12 col-lg-6 d-grid p-5'>
                        <Box className='mb-4 mt-2'>
                        <Typography variant="h4" className='bannertext mt-5 mb-5 textLeft' gutterBottom component="div" style={{color:'white'}}> 
                         The most accurate, <br></br> transparent and fastest way to grade your cards!
                        </Typography>
                        <Typography className='textLeft bannertextP' variant="subtitle2" style={{color:'white', fontSize: '22px', lineHeight: '26px' }}>Grade with Artificial Intelligence! <br></br>
                        5,000+ happy collectors, same-day grading available.</Typography>
                        </Box>
                        <Box className='textLeft'>
                         <Link to="/dashboard">
                              <button className="button button1"
                              style={{background:'#5E5DF0', boxShadow: '0px 2px 10px -6px'}}
                              >Grade Your Cards</button>
                         </Link>
                        </Box>
                      </div>
                      <div className='col-md-6 col-sm-12 col-lg-6 p-5 mt-5 mb-2 paddingDiv'>
                      <img
                       className='imageBanner'
                         src={bannerImg}
                         alt='Standard Turnaround Time'
                         loading="lazy"
                         width="60%"
                       />
                     </div>
                 </div>
             
           </div>
    );
};

export default BannerCo;




{/* <Player
playsInline
poster="/assets/poster.png"
src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
/>      */}