import StyleIcon from '@mui/icons-material/Style';
import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const SubCard = () => {
    return (
        <div className="d-grid mt-3" style={{justifyItems: 'center'}}>
        <div className='col-12 row d-flex boxShadow pt-4 pb-4 ps-1'>
           <div className='col-6 textLeft'>
           <Typography variant="h6" component="h">
           Your Cards
           </Typography>
           </div>
           <div  className='col-6 textRight'>
            
           </div>
        </div>
        <div className='col-12 boxShadow radius10 mt-3 pt-5 pb-5'>
            <div className='col-12 gridSystem'>
            <StyleIcon className='ms-2 iconColor'></StyleIcon>
            <Typography variant="hsubtitle1" display="block" gutterBottom style={{fontWeight:'500'}}>
               No Cards
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
            You haven't submitted any cards for grading yet. <br></br>
            Click the button below to get started.
            </Typography>
            <div  className='col-6  '>
                  <Link to="/submissions_service_new" style={{textDecoration:"none"}}>
                   <button className="button-18 pt-3 pb-3" role="button" >NEW SUBMISSION</button>
                   </Link>
           </div>
            </div>
        </div>
    </div>
    );
};

export default SubCard;