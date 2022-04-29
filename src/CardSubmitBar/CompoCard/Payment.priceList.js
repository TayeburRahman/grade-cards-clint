import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hook/useAuth';


function  PaymentPriceList({promoFindPrice,cart}) {
  const {user,isLoading} = useAuth()  

  // ------------------------
  const price = cart?.length * 20; 
// ------------------------------------   
 
    return (
        <Fragment>
                <div className='col-12 text-left'
                style={{boxShadow: '0px 0px 0px 0.2px', padding: '10px'}}
                >
                  <Typography variant="h6" gutterBottom component="div">
                   Summary
                   </Typography>
               </div> 
               <div className='col-12'
                  style={{boxShadow: '0px 0px 0px 0.2px', padding: '10px'}}
               > 
                <div className='d-flex mb-2 mt-2' 
                style={{ justifyContent: 'space-between', alignItems: 'center'}}
                >
                <Typography className='text-left' variant="button" gutterBottom component="div">
                  <span style={{color:"white", background:"#6a00ff", padding:"0px 5px"}}> {cart?.length}</span> Total Declared Cards
                </Typography> 
                </div>  
                <div className='d-flex' 
                style={{ justifyContent: 'space-between', alignItems: 'center'}}
                >
                 <Link to="/submissions_service_new"
                 style={{ textDecoration: 'none', color:'#20BFB8'}}
                 >
                 <Typography variant="button" display="block" gutterBottom>
                   EDIT
                </Typography>
                 </Link>
                 
               </div>  
               <br/>
               <br/>
               <div className='d-flex' 
               style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Typography variant="body2" display="block" gutterBottom>
                 Service Level Fee:
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                  ($20  x {cart?.length}) = ${price}
                </Typography>
               </div>  
               <div className='d-flex mb-1' 
               style={{ justifyContent: 'space-between', alignItems: 'center'}}
                > 
                 <Typography variant="body2" display="block" gutterBottom>
                 Promo Code 30% Discount:
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                 ${promoFindPrice? promoFindPrice : '0'}
                </Typography>
              </div>  
              <br/> <br/>
              <div className='d-flex' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Typography variant="body2" display="block" gutterBottom>
                 Total Cost :
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                ${promoFindPrice? promoFindPrice : price}
                </Typography>
              </div>  
              <br/> 
             </div>
 
        </Fragment>
    )
}

export default  PaymentPriceList
