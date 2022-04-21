import { Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousol.css'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 100 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

const Carousol = () => {
 
    return (
        <div className=' ' style={{
          height:'400px'
        }}>
           <Typography variant="h4" className='textHead mt-5' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
             >
                Grade with Crypto - 20% discount <br></br> if you pay with Collector Coin
             </Typography>
           <div className='p-5'>
           <Carousel className='' responsive={responsive}>
              <div className="shadow-effect">
                 <img className="img-circle" width="80%"  src='https://i.ibb.co/h78PqRF/p2fkmf7776z9aga4k52sp119w0-image-1.png' />
                 <p  className='fontbolt'>LLI Dingers</p>
              </div>
          
             <div>
                 <img className="img-circle" width="79%" src='https://i.ibb.co/C0d4PBc/SPORTCARD-transparent-background.png' />
                 <p  className='fontbolt'>Sport Cart</p>
             </div>
             <div> 
                 <img className="img-circle" width="80%"  src='https://i.ibb.co/0CypZW0/REAPER-MASCOT-LOGO.jpg' />
                 <p  className='fontbolt'> REAPER</p>
             </div>
             <div> 
                 <img className="img-circle" width="80%"  src='https://i.ibb.co/wR59Pcc/7b90de10d5b4a11aad611f4b513de101.jpg' />
                 <p  className='fontbolt'>Athaya</p>
             </div>
             <div> 
                 <img className="img-circle" width="80%"  src='https://i.ibb.co/1XmpQ0X/e92a4bf21942cea98442f91206d4688f-1.png' />
                 <p className='fontbolt'>BIG Tiem </p>
             </div>
             <div> 
                 <img className="img-circle" width="80%"  src='https://i.ibb.co/2Ksy53w/attachment-89757166.jpg' />
                 <p  className='fontbolt'>BIL</p>
             </div>
             <div>
                 <img className="img-circle" width="79%" src='https://i.ibb.co/C0d4PBc/SPORTCARD-transparent-background.png' />
                 <p  className='fontbolt'> Sport Cart</p>
             </div>
             <div> 
                 <img className="img-circle" width="80%"  src='https://i.ibb.co/0CypZW0/REAPER-MASCOT-LOGO.jpg' />
                 <p className='fontbolt'>REAPER </p>
             </div>
          </Carousel>
           </div>
        </div>
            
            
    );
};

export default Carousol;