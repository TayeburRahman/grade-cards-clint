import { Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 100 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const PriceCarousol = () => {
    return (
        <div className=' ' style={{height:'400px'}}>
           <Typography variant="h4" className='textHead mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
                Grade with Crypto - 20% discount <br></br> if you pay with Collector Coin
             </Typography>
           <div className='p-5'>
           <Carousel className='' responsive={responsive}>
               
             <div>
             <Typography variant="h4" className='textHead textLeft mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
              $1,500 per card
             </Typography>
                <ui className="textLeft">
                <li ><p>28-30 days turnaround</p></li>
                <li><p>Up to $1,000 insurance</p></li>
                <li><p> Cerified Accurate Grade</p></li>
                <li><p>Auto slab w/Drade</p></li>
                </ui>
             </div>
             <div> 
             <Typography variant="h4" className='textHead textLeft mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
              $909 per card
             </Typography>
                <ui className="textLeft">
                <li><p>15-18 days turnaround</p></li>
                <li><p>Up to $6,000 insurance</p></li>
                <li><p> Cerified Accurate Grade</p></li>
                <li><p>Auto slab w/Drade</p></li>
                </ui>
             </div>
             <div> 
             <Typography variant="h4" className='textHead textLeft mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
              $360 per card
             </Typography>
                <ui className="textLeft">
                <li><p>18-20 days turnaround</p></li>
                <li><p>Up to $1,000 insurance</p></li>
                <li><p> Cerified Accurate Grade</p></li>
                <li><p>Auto slab w/Drade</p></li>
                </ui>
             </div>
             <div> 
             <Typography variant="h4" className='textHead textLeft mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
              $1,600 per card
             </Typography>
                <ui className="textLeft">
                <li><p>12-15 days turnaround</p></li>
                <li><p>Up to $1,000 insurance</p></li>
                <li><p> Cerified Accurate Grade</p></li>
                <li><p>Auto slab w/Drade</p></li>
                </ui>
             </div>
             <div> 
             <Typography variant="h4" className='textHead textLeft mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
              $250 per card
             </Typography>
                <ui className="textLeft">
                <li><p>28-29 days turnaround</p></li>
                <li><p>Up to $65,000 insurance</p></li>
                <li><p> Cerified Accurate Grade</p></li>
                <li><p>Auto slab w/Drade</p></li>
                </ui>
             </div>
             <div>
             <Typography variant="h4" className='textHead textLeft mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
              $5,000 per card
             </Typography>
                <ui className="textLeft">
                <li><p>20-30 days turnaround</p></li>
                <li><p>Up to $5,000 insurance</p></li>
                <li><p> Cerified Accurate Grade</p></li>
                <li><p>Auto slab w/AGS App</p></li>
                </ui>
             </div> 
          </Carousel>
           </div>
        </div>
            
            
    );
};

export default PriceCarousol;