import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useAuth from '../../Firebase/Hook/useAuth'
import MetaData from '../../MetaData'
import ServiceData from '../CompoCard/ServiceData'
import userImg from "../Images/download (1).svg"
import img from "../Images/download.svg"
import CheckoutSteps from './CheckoutSteps'
import './MainPage.css'

  
function  Service() {
   const [selectedValue, setSelectedValue] = useState({});
   const [isService, setService] = useState([]);
   const {user, isLoading} = useAuth()
   let history = useHistory();
  //  console.log('product',isService);
   const [loading, setLoading] = useState(false)
 
// --------------------------------------
  useEffect(() => {
    fetch(`https://powerful-harbor-40804.herokuapp.com/api/v1/submit/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setService(data.submit.email));
  }, []);

   const handleClick =(data)=>{
 
        setLoading(true)
        let submit ={}
        submit.service = data;
        submit.email = user?.email; 
  
        if(!isService.length){
          fetch("https://powerful-harbor-40804.herokuapp.com/api/v1/submit",{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(submit),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log('result-post',result)
              if (result) { 
                 history.push("/submission_cards_new");
                 setLoading(false)
              } else {
              }
               
            });  
         }else if(isService === user.email){
          fetch(`https://powerful-harbor-40804.herokuapp.com/api/v1/submit/${user?.email}` ,{
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(submit),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log('result',result)
              if (result.massages) {
                // alert("Update Successful"); 
                history.push("/submission_cards_new");
                setLoading(false)
              } else {
                 
              }
            });  
  
        }
   
   }
 
    return (
        <div className='mainsection'>
          <MetaData title={'User Service'} />
          <div className='row fastRow '>
             <div className='d-flex container logoContainer'
             style={{justifyContent: 'space-between'}}
             >
             <div className='text-left logo'>
              <img src={userImg}    />
             </div>
             <div className=' text-right userImage'>
               <img src={img}  />
             </div>
             </div>
             <div className='text'>
               <h2>Submit Cards For Grading</h2>
             </div>
             
             <div className='CheckoutStepsMainPage'>
                 <CheckoutSteps  service  className=" "></CheckoutSteps>
             </div>
          </div>
          <div className='text-left container lastSection '
           style={{justifyContent: 'space-around'}}
          >
            
            <div className='row col-md-7 text-left d-flex'
            style={{
              margin: '60px 0px 0px 0px'
          }}
            >
              <div>
              <h2 className='h2-style '>
                  Enter Payment Details
                  </h2>
                  <p>
                  Select your payment method and enter details.
                  </p>
              </div>
            </div>
          </div>
          <div className='d-flex container ThardSection pb-5'
            style={{justifyContent: 'space-around'}}
          >
            <ServiceData setSelectedValue={setSelectedValue}></ServiceData>
          </div> 
          <div className='d-grid mt-5' style={{justifyItems: 'center'}}>
             <div className='d-flex mt-5 positionFixedBottom'
               style={{justifyContent: 'space-around'}}
               > 
                  <Button  variant="contained"  
                  onClick={(e)=> handleClick(selectedValue)} 
                  style={{ padding: '10px 100px 10px 100px', background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
                  > {loading ?
                    <Box sx={{ display: 'flex' }}>
                   <CircularProgress />
                   </Box> :
                     <Typography> Next</Typography> 
                  } 
                  </Button>
             </div>
          </div>
       </div>
        
    )
}

export default  Service
