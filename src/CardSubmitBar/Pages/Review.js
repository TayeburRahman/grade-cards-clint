import { Box, Button, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Firebase/Hook/useAuth'
import MetaData from '../../MetaData'
import ReviewPriceList from '../CompoCard/Review.priceList'
import users from "../Images/download (1).svg"
import img from "../Images/download.svg"
import CheckoutSteps from './CheckoutSteps'
import './MainPage.css'

function  Review() {
  const {user} = useAuth()
  const [isCards, setCards] = useState([]);
  const cards = isCards?.submit?.cards
  const service = isCards?.submit?.service
  const shipping = isCards?.submit?.shipping 

  useEffect(() => {
    fetch(`https://powerful-harbor-40804.herokuapp.com/api/v1/submit/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCards(data));
    }, []);
// ------------
    return (
        <div className='mainsection'>
          <MetaData title={'Oder Review'} />
        <div className='row fastRow'>
        <div className='d-flex container logoContainer'
             style={{justifyContent: 'space-between'}}
             >
             <div className='text-left logo'>
              <img src={users} dataReactid=".0.0"  />
             </div>
             <div className=' text-right userImage'>
               <img src={img} dataReactid=".0.0"/>
             </div>
             </div>
             <div className='   text'>
               <h2>Submit Cards For Grading</h2>
             </div>
             
             <div className='CheckoutStepsMainPage'>
                 <CheckoutSteps service cards shipping payment review className=" "></CheckoutSteps>
             </div>
        </div>
       <div className='d-grid mt-5' style={{justifyItems: 'center'}}>
       <div className='container row lastSection '>
          <div className='col-md-8 col-sm-12 col-lg-8 p-2'>
            <div className=' text-left'>
            <h2 className='h2-style '>
               Review your submission
              </h2>
                <p className='text-left'>
                Go through all the information you input in the previous steps, and click submit to finish submission.
                </p>
            </div>
            <div className='col-12 mt-5 d-grid p-2' style={{boxShadow: '0px 0px 0px 0.2px'}}>
                 <Box className='d-flex' style={{alignItems: 'center'}}>
                   <Typography className='text-left smHedingText mb-3 mt-2 pe-3' variant="none" gutterBottom >
                   Card(s) in Submission 
                   </Typography>
                   <Link to="/submissions_cards_new"
                    style={{ textDecoration: 'none', color:'#20BFB8'}}
                    >
                    <Typography  variant="button" display="block" gutterBottom>
                      EDIT
                    </Typography>
                   </Link>
                 </Box>
                 <Box className="d-flex">
                     <Box className='col-6 gap-3 d-flex pe-5 me-5'
                     style={{justifyContent: 'space-around'}}
                     >
                        <Typography className='me-5' variant="subtitle2" gutterBottom >
                         Card(s)
                        </Typography>
                     </Box> 
                 </Box>
                   {
                     cards?.map((card, idx) =>(
                      <Box key={idx} className="d-flex mb-2  p-2"
                      style={{alignItems: 'center' , justifyContent: 'center',
                      boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                     }}
                      
                      > 
                          <Box className='col-md-1 col-sm-3'>
                          <img
                               src={card?.images?.small}
                               loading="lazy"
                               width="80%"
                             />
                          </Box>
                          <Box className='d-grid text-left col-md-8 col-sm-8' >
                          <Typography variant="subtitle2" component="div">
                             {card?.artist} 
                            </Typography>
                            <Typography className='text-left' variant="body2" component="div">
                             {card?.set?.series} 
                            </Typography>
                            <Typography className='text-left' variant="body2" component="div">
                             {card?.rules[0].slice(0,50)}
                            </Typography>
                          </Box> 
                        </Box>
                     ))
                   } 
             </div>
             <div className='col-12 mt-5 p-2 row' style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
                <Box className='col-md-6 col-sm-12 col-lg-6'>
                   <Box className='d-flex' style={{alignItems: 'center'}}>
                      <Typography className='text-left smHedingText mb-3 mt-2 pe-3' variant="none" gutterBottom >
                      Service Level
                      </Typography>
                      <Link to="/submissions_service_new"
                       style={{ textDecoration: 'none', color:'#20BFB8'}}
                       >
                       <Typography  variant="button" display="block" gutterBottom>
                         EDIT
                       </Typography>
                      </Link>
                    </Box>
                    <Box style={{color:"#494949"}}>
                       <Typography className='text-left' variant="body2" component="div">
                         {service?.localPrice} / Card
                       </Typography>
                       <Typography className='text-left' variant="body2" component="div">
                         Protection up to ${service?.price}  
                       </Typography>
                       <Typography className='text-left' variant="body2" component="div">
                             {service?.day} Day turnaround
                       </Typography>
                    </Box>
                </Box>
                <Box className='col-md-6 col-sm-12 col-lg-6'>
                   <Box className='d-flex' style={{alignItems: 'center'}}>
                      <Typography className='text-left smHedingText mb-3 mt-2 pe-3' variant="none" gutterBottom >
                       Shipping Address
                      </Typography>
                      <Link to="/submission_shipping_new"
                       style={{ textDecoration: 'none', color:'#20BFB8'}}
                       >
                       <Typography  variant="button" display="block" gutterBottom>
                         EDIT
                       </Typography>
                      </Link>
                    </Box>
                    <Box style={{color:"#494949"}}>
                      <Typography className='text-left' variant="body2" component="div">
                         {shipping?.firstName}  {shipping?.lastName}  
                       </Typography>
                       <Typography className='text-left' variant="body2" component="div">
                         {shipping?.addres}  
                       </Typography>
                       <Typography className='text-left' variant="body2" component="div">
                          {shipping?.apt},  {shipping?.category},  {shipping?.password} 
                       </Typography>
                       <Typography className='text-left' variant="body2" component="div">
                             {shipping?.city}, {shipping?.phone} 
                       </Typography>
                    </Box>
                </Box>
             </div>
          </div>
          <div className='col-md-4 col-sm-12 col-lg-4 p-2'>
             <ReviewPriceList isCards={isCards}/>
          </div> 
        </div>
        <div>
           <Link to="/submission_payment_new">
             <Button className='positionFixedBottom' variant="contained" style={{ padding: '10px 50px 10px 50px', background:"rgb(156 156 156 / 57%)",color: '#323232', border: '0'}} >
              <Typography>Back</Typography> 
              </Button>
           </Link>
        </div>

       </div>
         
    </div>
    )
}

export default  Review
