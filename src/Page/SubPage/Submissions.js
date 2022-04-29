import { Box } from '@material-ui/core';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/Hook/useAuth';
import './SubPage.css';

const Submissions = () => {
    const {user} = useAuth()
    const [isOrder, setOrder] = useState([]);
    console.log(isOrder )

    useEffect(() => {
        fetch(`https://powerful-harbor-40804.herokuapp.com/api/v1/order/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data?.order));
        }, []);
    return (
        <div className="d-grid mt-3" style={{justifyItems: 'center'}}>
            <div className='col-12 row d-flex boxShadow radius10 p-3'>
               <div className='col-5 textLeft'>
               <Typography variant="h6" component="h">
               Submissions
               </Typography>
               </div>
               <div  className='col-7 textRight '>
                   <Link to="/submissions_service_new" style={{textDecoration:"none"}}>
                   <button className="button-18 pt-3 pb-3" role="button" >NEW SUBMISSION</button>
                   </Link>
                </div>
            </div>

            <div className='col-12 boxShadow mt-3 pt-5 pb-5'>
            {isOrder.length ?  
             <Box  className='p-2'>
                <hr/>
                 <div className='col-12 row'>
                     <div className='col-md-6 col-sm-12 col-lg-6 row'>
                         <div className='col-4'>
                             <Typography variant='subtitle2'>
                              Submission #
                             </Typography>
                         </div>
                         <div className='col-4'>
                             <Typography variant='subtitle2'>
                              Date Placed
                             </Typography>
                         </div>
                         <div className='col-4'>
                             <Typography variant='subtitle2'>
                              Payment Status
                             </Typography>
                         </div> 
                     </div>
                     <div className='col-md-6 col-sm-12 col-lg-6 row'>
                         <div className='col-4'>
                             <Typography variant='subtitle2'>
                             Service Level
                             </Typography>
                         </div>
                         <div className='col-4'>
                             <Typography variant='subtitle2'>
                              # Cards
                             </Typography>
                         </div>
                         <div className='col-4'>
                             <Typography variant='subtitle2'>
                              Status
                             </Typography>
                         </div> 
                     </div> 
                  </div>
                 <hr/>
                 {isOrder.map((odr,idx) =>(
                  <Fragment>
                       <div className='col-12 row mb-1'>
                        <div className='col-md-6 col-sm-12 col-lg-6 row'>
                          <div className='col-4'>
                              <Typography variant='body2'>
                               {odr._id.slice(13 )}
                              </Typography>
                          </div>
                          <div className='col-4'>
                              <Typography variant='body2'>
                               {odr.updated.slice(0, 10)}
                              </Typography>
                          </div>
                          <div className='col-4'>
                              <Typography variant='overline'>
                               {odr?.submit?.payment?.card ? odr?.submit?.payment.card?.brand : "No Paid"}
                              </Typography>
                          </div> 
                      </div>
                      <div className='col-md-6 col-sm-12 col-lg-6 row'>
                          <div className='col-4'>
                              <Typography variant='body2'>
                              $ {odr?.submit?.service?.localPrice}/ Card
                              </Typography>
                          </div>
                          <div className='col-4'>
                              <Typography variant='body2'>
                              {odr?.submit?.cards?.length}
                              </Typography>
                          </div>
                          <div className='col-4'>
                              <Typography variant='body2'>
                              {odr?.status}
                              </Typography>
                          </div> 
                        </div> 
                       </div>
                       {
                           odr?.submit?.payment?.card ?
                           <div className='mb-3 row boxOrderDashboard'>
                           <Box className='text-left col-sm-12 col-md-6 col-lg-6 d-flex p-2' style={{alignItems: 'center'}}>
                               <ShoppingCartCheckoutIcon style={{color:"rgb(51 133 15 / 87%)"}}/>
                              <Typography className='ms-2' variant='h6'>
                                Paid Your Payment
                              </Typography>
                           </Box> 
                           <Box className='col-sm-12 col-md-6 col-lg-6 text-left p-2'>
                               <Link to="/dashboard/submissions/dateless">
                                  <button className="button-9 text-left" role="button">SHOW ORDER DATELESS</button>
                               </Link>
                           </Box>
                       </div>
                       :
                       <div className='mb-3 boxPayDashboard'>
                         <Box className='text-left d-flex p-2' style={{alignItems: 'center'}}>
                             <ShoppingCartCheckoutIcon style={{color:"rgba(218, 102, 18)"}}/>
                            <Typography className='ms-2' variant='h6'>
                               Payment Pending
                            </Typography>
                         </Box>
                         <Typography className='ms-2 text-left' variant='body2'>
                            You can now pay whenever you like. Just keep in mind we can't ship your cards back till you have completed payment.
                         </Typography> 
                         <Box className='text-left p-2'>
                             <Link to="/dashboard/submissions/pay">
                                <button className="button-9 text-left" role="button">PAY NOW</button>
                             </Link>
                         </Box>
                       </div>
                       }
                        
                       <hr/>
                  </Fragment>
                  ))} 
             </Box> 
             :
             <div className='col-12'>
                 <LocalGroceryStoreIcon/>
                 <Typography variant="hsubtitle1" display="block" gutterBottom style={{fontWeight:'500'}}>
                  No Submissions
                 </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  You have no submission's yet. <br></br>
                  Click NEW SUBMISSION to get started.
                </Typography>
             </div>  
            }
            </div>
        </div>
    );
};

export default Submissions;