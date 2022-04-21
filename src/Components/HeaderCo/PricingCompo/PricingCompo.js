import { Typography } from '@mui/material';
import React from 'react';




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

const PricingCompo = () => {
    return (
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
    );
};

export default PricingCompo;