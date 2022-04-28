import { Button, CircularProgress } from '@material-ui/core';
import { Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Firebase/Hook/useAuth';


function  ReviewPriceList({isCards}) {
  const {user} = useAuth()  
  const [loading, setLoading] = useState(false) 
  let history = useHistory();
  console.log(isCards)
 

const handelOnClick =(data)=>{ 
  setLoading(true) 
  let orders = {}
  orders.email = user.email
  orders.submit = data
  fetch("http://localhost:5000/api/v1/order",{
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(orders)
  })
    .then((res) => res.json())
    .then((result) => { 
      if (result.massages) {  
        fetch(`http://localhost:5000/api/v1/submit/${isCards?.submit?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("dltId", result);
            if (result.massages) {
               setLoading(false)
               alert("Complited Your Submissions")
               history.push("/dashboard")
            } else {
             
            }
          });
        
        
      } else {
         
      }
    });  
}
  const handleDeleteOrders = (id) => {
  console.log(id)
  const url = `https://pacific-escarpment-27904.herokuapp.com/deleteProduct/${id}`;
      
    }
 

  // ------------------------ 
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
                   <Button className='mt-3' id='stripButton' onClick={() => handelOnClick(isCards?.submit)} style={{height:'45px'}}>
                     {loading ? 
                        <CircularProgress />
                      :
                       <Typography>COMPLETE SUBMISSION</Typography> 
                      }
                   </Button>
                 <br/>
                <div className='d-flex mb-2 mt-2' 
              style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                <Typography className='text-left' variant="h6" gutterBottom component="div">
                 Price Summary
                 </Typography> 
                </div>   
               <div className='d-flex' 
               style={{ justifyContent: 'space-between', alignItems: 'center'}}
               >
                 <Typography variant="body2" display="block" gutterBottom>
                 Total Cards:
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                 {isCards.submit?.cards?.length}
                </Typography>
               </div>  
               <div className='d-flex mb-1' 
               style={{ justifyContent: 'space-between', alignItems: 'center'}}
                > 
                 <Typography variant="body2" display="block" gutterBottom>
                  Payment Type {isCards?.submit?.payment}
                </Typography>
                <Typography className='text-right' variant="subtitle2" display="block" gutterBottom>
                 {isCards?.submit?.pay? "Paid" : "No Paid"}
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
                ${isCards?.submit?.price}
                </Typography>
              </div>  
              <br/> 
             </div>
 
        </Fragment>
    )
}

export default  ReviewPriceList
