import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import cardPng from '../../../image/card.png'


const Pric =[
    {
        price: '$20',
        card: 'Per card',
        days: '28-30 days turnaround',
        insurance :'Up to $500 insurance'
    },
    {
        price: '$50',
        card: 'Per card|',
        cardPo: 'Most Popular Option',
        days: '28-30 days turnaround',
        insurance :'Up to $1,000 insurance'
    },
    {
        price: '$100',
        card: 'Per card',
        days: '28-30 days turnaround',
        insurance :'Up to $2,500 insurance'
    },
    {
        price:'$250',
        card: 'Per card',
        days: ' 30 days turnaround',
        insurance :'Up to $10,000 insurance'
    },
    {
        price:'$10,00',
        card: 'Per card',
        days: '28 days turnaround',
        insurance :'Up to $50,000 insurance'
    }, 
    {
        price: '$2,000',
        card: 'Per card',
        days: '1 days turnaround',
        insurance :'Up to $100,000 insurance'
    }
]

const Pricing = () => {
    return (
     <Fragment>
            <div className='mt-5 price footerBg'>
              <Typography variant="h4" className='textHead' gutterBottom component="div"
              sx={{ fontFamily: 'system-ui', letterSpacing: -2, color:'white !important'}} 
             >
               Pricing
             </Typography>
             <Typography className='' variant="h6" id='fontWeight' gutterBottom component="div">
             <span style={{color:'#5600ff'}}>7 times more affordable </span>
                 than the competition.
             </Typography> 
             <div className='col-md-12 col-sm-12 col-lg-12 row p-4 '>
              {
                  Pric.map((rus) =>(
                    <div className='col-md-2 col-sm-6 col-lg-2 mt-3'>
                    <Typography variant="h4" className='textHead' gutterBottom component="div"
                     sx={{ fontFamily: 'system-ui', letterSpacing: -2,  color:'white !important'}} 
                    >
                       {rus.price}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                       {rus.card} <span style={{color:'#5600ff',fontWeight: '600'}}>{rus.cardPo}</span>
                    </Typography> 
                    <Typography variant="body2" gutterBottom>
                       {rus.days}  
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                       {rus.insurance}  
                    </Typography>
                    </div>
                  ))
              }
             </div>
             <Link className='text-decoration' to=''>
             <button class="button-18 mt-5" role="button">Grade your Cards Now!</button>
             </Link>
        </div>
        <div className='row mt-5 mb-5'
        style={{alignItems: 'center'}}
        >
        <div className='col-md-7 col-lg-7 col-sm-12 mt-3 mb-3'>
                 <img
                  src={cardPng}
                  alt='Standard Turnaround Time'
                  loading="lazy"
                  width="80%"
                />
             </div>
             <div className='col-md-5 col-lg-5 col-sm-12 textLeft p-5'>
                 <Typography variant="h4" className='textHead textLeft  ' id="" gutterBottom component="div"
                  sx={{ fontFamily: 'Monospace', letterSpacing: -2,}} 
                  >
                  Accurate & Unbiased
                 </Typography>
          
                 <Typography variant="body" className='textLeft  ' gutterBottom 
                 sx={{ fontFamily: 'cursive', }} 
                 style={{fontWeight:'700', fontSize:'30px'}}
                 >
                 Taking Human Error Out Of Grading
                </Typography> 
                <div className=''>
                <Link className='text-decoration  ' to=''>
                <button class="button-18 mt-5" id="buttonBlack" role="button"
                style={{background:'black', color:'white'}}
                >Grade your Cards Now!</button>
                </Link>
                </div>
             </div>
        </div>
        <div className=''
             style={{background:'rgb(22, 20, 51)', color:'white', marginBottom: '-2px'}}
             >
                 <div className='pt-5 pb-5'>
                 <Typography variant="h4" className='textHead  ' gutterBottom component="div"
                  sx={{ fontFamily: 'system-ui', letterSpacing: -2, color:'white !important'}} 
                 >
                    Have Questions? We’re here to help
                 </Typography>
                 <Typography variant="h6" className='' id='' gutterBottom component="div">
                 Use the chat window on the website to get in touch with us
                 </Typography> 
                 </div>
             </div>
     </Fragment>
    );
};

export default Pricing;