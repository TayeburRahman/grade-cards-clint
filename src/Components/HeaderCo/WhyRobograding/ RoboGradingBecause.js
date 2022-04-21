import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';

const AGSFuture =[
    {image: 'https://i.ibb.co/ch0V74M/future4.png',
    h5: 'It’s smarter than Human Grading',
    p:'Current grading systems have a long wait time, sometimes lasting weeks. With AGS, you can grade your cards in minutes.'
    },
    {image: 'https://i.ibb.co/pyz07GS/future3.png',
    h5: 'It’s truthful & unbiased',
    p:'Our app looks for scratches, print lines, surface composition, and other microscopic details that can easily be missed by the human eye.'
    },
    {image: 'https://i.ibb.co/D9DdRkQ/future5.jpg',
    h5: 'It doesn’t make you wait',
    p:'Get away from the tedious way of mailing your cards for grading. Download the app and grade away.'
    },
    {image: 'https://i.ibb.co/fHFD8Hw/future2.png',
    h5: 'It finds Global & Local Defects',
    p:'As our AI grading software grades more, it learns more. This allows you to get a more accurate grading than ever before.'
    },
    {image: 'https://i.ibb.co/LxnCvng/future1.png',
    h5: 'Accessible',
    p:'Current grading methods are tedious. With our revolutionary technology, we make grading accessible to one and all.'
    },
    {image: 'https://i.ibb.co/5hMr8pb/116-Z-2012-w013-n001-350-B-p50-1.jpg',
    h5: 'Accessible',
    p:'Current grading methods are tedious. With our revolutionary technology, we make grading accessible to one and all.'
    }
  ]
const  RoboGradingBecause = () => {
    return (
        <Fragment>
        <div>
           <div className='pt-5' >
             <Typography variant="h4" className='textHead' gutterBottom component="div"
              sx={{ fontFamily:'system-ui', letterSpacing: 0}} 
             >
                Thousands of collectors are <br></br> switching to RoboGrading because…
              </Typography>
               <div className='row p-5 d-flex'
               style={{justifyContent:'space-evenly',alignItems: 'center'}}
               >
                 {AGSFuture.map((rus) =>(
                    <div className='col-md-4 col-lg-4 col-sm-12'>
                    <img
                        src={rus.image}
                        alt='Standard Turnaround Time'
                        loading="lazy"
                        width="50%"
                     />
                      <Typography variant="h5" className='    p-2' gutterBottom  
                       style={{fontSize: '24px !important',fontWeight:"700",fontFamily: 'system-ui' }}
                       >
                     {rus.h5}
                    </Typography>
                    <Typography variant="subtitle1" className='  p-2' gutterBottom 
                      sx={{ fontFamily: 'cursive', }} 
                      style={{fontWeight: '200 !important', fontSize:'16px'}}
                      >
                      {rus.p}
                     </Typography>
                </div>
                 ))}
                   
                   <Nav.Link href="#pricing" className='menuText '><button className="button-34 p-3" role="button">Create an Account</button>
                   </Nav.Link>
               </div>
          </div>
        </div> 
        </Fragment>
    );
};

export default  RoboGradingBecause;