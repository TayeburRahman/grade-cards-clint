import { Box } from '@material-ui/core';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
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
        fetch(`http://localhost:5000/api/v1/order/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data));
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
           {isOrder ? 
             <Fragment> 
                        <Box className='p-2'>
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
                         </Box>  
             </Fragment>
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