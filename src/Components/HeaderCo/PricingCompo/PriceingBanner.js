import { Box, Typography } from '@mui/material';
import React from 'react';
import { Nav } from 'react-bootstrap';
import './PriceingCompo.css'

const PriceingBanner = () => {
    return (
        <div className='priceingBanner'
        style={{backgroundColor:'#000599'}}
        >
            <div className='row d-grid'
            style={{ justifyItems: 'center'}}
            >
                 <div className='col-md-6 mt-5'>
                 <Typography variant="h4" className='textHead p-2 ' id="colorWhite" gutterBottom  
                  sx={{ fontFamily: 'Monospace', letterSpacing: -2,}} 
                  >
                  Pricing - Grading for Everyone
                 </Typography>
                 <Typography variant="h5" className=' p-2' id="colorWhite" gutterBottom component="div"
                   >
                  Get a free Celebrations box if you grade 25+ cards with us. Get a 20% flat discount if you pay with Collector Coin. Both these promos cannot be combined.
                 </Typography>
                 </div>
                 <Box className='mt-3 mb-5'>
                      <button class="button button1">Grade your cards now!</button>
                 </Box>
            </div>
        </div>
    );
};

export default PriceingBanner;