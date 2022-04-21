import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Typography } from '@mui/material';
import React from 'react';
import './SubPage.css';

const Submissions = () => {
    return (
        <div className="d-grid mt-3" style={{justifyItems: 'center'}}>
            <div className='col-12 row d-flex boxShadow radius10 p-3'>
               <div className='col-5 textLeft'>
               <Typography variant="h6" component="h">
               Submissions
               </Typography>
               </div>
               <div  className='col-7 textRight '>
               <button className="button-18 pt-3 pb-3" role="button">NEW SUBMISSION</button>
               </div>
            </div>
            <div className='col-12 boxShadow mt-3 pt-5 pb-5'>
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
            </div>
        </div>
    );
};

export default Submissions;