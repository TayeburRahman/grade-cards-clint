import { Typography } from '@mui/material';
import React from 'react';
import image from '../../../image/ agsCover.jpeg'
import { Nav } from 'react-bootstrap';


const AGSFuture =[
  {image: 'https://i.ibb.co/tBgRTPC/1.png',
  h5: 'Centering',
  p:'The AI detects discoloration patterns in your cards and matches them against thousands of templates (with perfect edges) to detect the precise center.'
  },
  {image: 'https://i.ibb.co/Zdn1K7J/2.png',
  h5: 'Sharpness',
  p:'The AI reads light and shadow as numbers (not subjectively). It detects the most minute contrast, blurriness in your images, and bad printing in your card.'
  },
  {image: 'https://i.ibb.co/FgyT0DZ/3.png',
  h5: 'Scratches',
  p:'Corners of your card can alter grading. especially if they are soft, have layering, or have uneven edges. Our AI methodically checks for them.'
  },
  {image:'https://i.ibb.co/HFJ2f87/6.png',
  h5: 'Corners',
  p:'If your card has flaking, whitening, dents, dings, or discoloring, our AI can detect those too. We will photograph your cards in special lighting for best results.'
  },
  {image:'https://i.ibb.co/3NdrgmN/5.png',
  h5: 'Edges',
  p:'Current grading methods are tedious. With our revolutionary technology, we make grading accessible to one and all.'
  },
  {image:'https://i.ibb.co/BBf4Qq3/4.png',
  h5: 'Eye Appeal',
  p:'Your card can have vibrant colors, contrast, and appeal. Our AI looks for all three in a card that may make it more appealing to the eye and gives it a score.'
  }
]

const WhyRoboradingWork = () => {
    return (
        <>
        <div className='d-grid pt-2 pb-5'
        style={{justifyItems: 'center', background:'rgb(22, 20, 51)', color:"#d3d6e5", alignItems: 'center'}}
        >
           <div className='container row d-flex pt-5 mt-1'
           style={{alignItems:'center'}}
           >
             <div className='col-md-6 col-lg-6 col-sm-12'>
               <img
                  src={image}
                  alt='Standard Turnaround Time'
                  loading="lazy"
                  width="100%"
               />
             </div>
             <div className='col-md-6 col-lg-6 col-sm-12 p-5 textLeft'>
                 <Typography variant="h4" className='textHead textLeft p-2' id="colorWhite" gutterBottom component="div"
                  sx={{ fontFamily: 'Monospace', letterSpacing: -2,}} 
                  >
                  Why AGS
                 </Typography>
          
                 <Typography variant="subtitle1" className='textLeft p-2' gutterBottom 
                 sx={{ fontFamily: 'cursive', }} 
                 style={{fontWeight: '200 !important', fontSize:'16px'}}
                 >
                   We are a bunch of passionate card collectors who were put off with the existing grading methods; it felt ambiguous and cryptic. And add to it the long waiting period, it just didn’t work for us. So we set out to make it easier, faster, and more inclusive for ourselves and for the community. 
                 </Typography>
                 <Typography variant="subtitle1" className='textLeft p-2' gutterBottom 
                 sx={{ fontFamily: 'cursive', }} 
                 style={{fontWeight: '200 !important', fontSize:'16px'}}
                 >
                 Let’s give more power to collectors and change the industry for good. 
                 </Typography>
                 <Nav.Link href="#pricing" className='menuText '><button className="button-34 p-3" role="button">Meet Our Team</button>
                 </Nav.Link>
             </div>
           </div>
        </div>
        <div className='pt-5' >
             <Typography variant="h4" className='textHead' gutterBottom component="div"
              sx={{ fontFamily:'system-ui', letterSpacing: 0}} 
             >
                Ready to get an unbiased grade?
              </Typography>
               <div className='row p-5 d-flex'
               style={{justifyContent:'space-evenly',alignItems:'center'}}
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
                    
               </div>
          </div>
        </>
    );
};

export default WhyRoboradingWork;