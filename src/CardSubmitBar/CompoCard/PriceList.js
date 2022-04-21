import { Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function  PriceList({price,length}) {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(" /product")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
    return (
        <Fragment>
                <div className='col-md-12 col-sm-12 text-left'
                style={{boxShadow: '0px 0px 0px 0.2px', padding: '10px'}}
                >
                  <Typography variant="h6" gutterBottom component="div">
                   Summary
                   </Typography>
               </div>
               <div className='col-md-12 col-sm-12'
                  style={{boxShadow: '0px 0px 0px 0.2px', padding: '10px'}}
               >
               <div className='d-flex mb-2 mt-2' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                <Typography className='text-left' variant="body2" gutterBottom component="div">
                Service Level
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                $20  / Card
                </Typography>
              </div>  
              <div className='d-flex' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Link to="/Service"
                 style={{ textDecoration: 'none', color:'#20BFB8'}}
                 >
                 <Typography variant="button" display="block" gutterBottom>
                   EDIT
                </Typography>
                 </Link>
                <Typography className='text-right' variant="caption" display="block" gutterBottom>
                $500 Max. Value Per Card
                </Typography>
              </div>  
              <br/>
              <br/>
              <div className='d-flex mb-1' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
      
                 <Typography variant="body2" display="block" gutterBottom>
                 Number of Cards:
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                {length}
                </Typography>
              </div>  
              <div className='d-flex' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Typography variant="body2" display="block" gutterBottom>
                 Price / Card:
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                ${price}
                </Typography>
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
                ($20  x {length}) = ${price} 
                </Typography>
              </div>  
               </div>
 
        </Fragment>
    )
}

export default  PriceList
