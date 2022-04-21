import { Box, Typography } from '@material-ui/core'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../../MetaData'
import StripeCheckoutFrom from '../CompoCard/Hooks/StripeCheckoutFrom'
import card from '../Images/card.png'
import user from "../Images/download (1).svg"
import img from "../Images/download.svg"
import coin from '../Images/fjRxNJr.png'
import paypel from '../Images/xxss_add_value_to_your_brand_with_online_coupons.png'
import CheckoutSteps from './CheckoutSteps'




// STP 1 : Stripe
// recreating the `Stripe` object on every render. 
const stripePromise = loadStripe('pk_test_51KMQpNAllsbPec2MljdIUAy8P2jFjlKR0SkpPMB7d5bycpAxxDKDJqprvv1m5R5ISx0zg8e3Oybg3JWtJgMGXZz700hVPICyim');

function  Payment() {
  const [ clickCard,setClickCard] =useState(1)
  const [ clickPaypal,setClickPaypal] =useState(0)
  const [ clickCoin,setClickCoin] =useState(0)

  console.log(clickCard, clickPaypal, clickCoin)
  // -----------
  const blurHandler = (e) => {
    console.log("input blurred",e.target.value)
  }
// --------------
  const clickHandelCard = (e) => {
    setClickCoin(0)
    setClickPaypal(0)
    setClickCard(1)
  }
  const clickHandelPaypal = (e) => {
    setClickCard(0)
    setClickCoin(0)
    setClickPaypal(1)
 }
 const clickHandelCoin = (e) => {
  setClickCard(0)
  setClickPaypal(0)
  setClickCoin(1)
}

    return (
        <div className='mainsection d-grid'>
          <MetaData title={'Payment Order'} />
        <div className='row fastRow'>
        <div className='d-flex container logoContainer'
             style={{justifyContent: 'space-between'}}
             >
             <div className='text-left logo'>
              <img src={user} dataReactid=".0.0"  />
             </div>
             <div className=' text-right userImage'>
               <img src={img} dataReactid=".0.0"/>
             </div>
             </div>
             <div className='text'>
               <h2>Submit Cards For Grading</h2>
             </div>
             <div className='CheckoutStepsMainPage'>
                 <CheckoutSteps  service cards shipping payment className=" "></CheckoutSteps>
             </div>
        </div>
        <div className='container lastSection d-grid'>
          <div className='row text-left d-flex mb-4 mt-5'>
            <div>
            <h2 className='h2-style'>
                Enter Payment Details  
                </h2>
                <p>
                Select your payment method and enter details.
                </p>
            </div>
          </div>
           <div className='row'>
             <div className='col-md-8 col-sm-12'>
                 <div className='col-md-12 col-sm-12 mb-5'>
                     <Typography variant=" " className='jss60 mb-4 text-left' gutterBottom component="div"> 
                        Add a Promo Code
                     </Typography>
                     <Typography variant="caption" className=' text-left' gutterBottom component="div"> 
                        Promo Code
                     </Typography>
                     <input
                     className='p-2'
                     id='addres'
                     type='code'
                       placeholder="Enter Promo Code"
                      //  onChange={changeHandler}
                       onBlur={blurHandler}
                     />
                      <Typography variant="caption" type='error' className=' text-left' gutterBottom component="div"> 
                        'error'
                     </Typography>
                 </div>
                 <div className='col-md-12 col-sm-12'>
                     <Typography variant=" " className='jss60 mb-4 text-left' gutterBottom component="div"> 
                     Select Payment Method
                     </Typography>
                    <div  className='col-md-12 row col-sm-12'>
                      <div className='col-md-6 col-sm-12'>
                         <label className="card" onClick={clickHandelCard}>
                            <input id="PaymentRadio"
                               style={{marginTop:'15px'}}
                                type="radio"
                               className="radio"
                               name="plan"
                               checked />
                            <div id="radioBoder" className="plan-details" id="plan-details"
                            style={{ justifyContent: 'center'}}
                            >
                               <img
                               className='me-2'
                               src={card} 
                               alt="BigCo Inc. logo" 
                               width='20%'/>
                               <Box className="d-flex me-1" >
                               <Typography className='mt-1' variant="button" display="block" gutterBottom>
                                  Credit or Debit Card
                                </Typography>
                                </Box>
                           </div>
                          </label>
                      </div>
                      <div className='col-md-6 col-sm-12'>
                         <label className="card" onClick={clickHandelPaypal} >
                            <input id="PaymentRadio"
                               style={{marginTop:'14px'}}
                               type="radio"
                               className="radio"
                               name="plan"
                               checked />
                            <div id="radioBoder" className="plan-details" id="plan-details"
                            style={{ justifyContent: 'center'}}
                            >
                               <img
                               src={paypel} 
                               alt="BigCo Inc. logo" 
                               width='33%'/>
                               <Box className="d-flex">
                               <Typography variant="button" display="block" gutterBottom>
                                </Typography>
                                </Box>
                           </div>
                          </label>
                      </div>
                      <div className='col-md-6 marginTop10 col-sm-12'>
                         <label className="card" onClick={clickHandelCoin}>
                            <input id="PaymentRadio"
                               style={{marginTop:'14px'}}
                               type="radio"
                               className="radio"
                               name="plan"
                               checked />
                            <div id="radioBoder" className=" checkmark plan-details" id="plan-details"
                              style={{ justifyContent: 'center',padding:'-10px'}}
                            >
                              <img
                              className='ms-2'
                               src={coin} 
                               alt="BigCo Inc. logo" 
                               width='10%'/>
                               <Box className="d-flex ms-4">
                                <div>
                                <Typography  variant="button" display="block" gutterBottom
                                style={{ marginTop: '-5px' }}
                                > 
                               Collector Coin (AGS) 
                                </Typography>
                                   <p className='text-left ms-1' id='saveSpan'> Save 10%</p> 
                                </div>
                                </Box>
                           </div>
                          </label>
                      </div>
                    </div>
                    <div  className='col-md-6 col-sm-12'>

                    </div>
                    <div  className='col-md-6 col-sm-12'>

                    </div>
                 </div>
                 {/*----------Creade Card-----------*/}
                 <div className='stripSection'>
                 {
                   clickCard === 1 ?(
                <div className='col-md-12 col-sm-12 mb-5'>
                    <Typography variant=" " className='jss60 mb-4 text-left' gutterBottom component="div"> 
                    Add debit / credit card
                    </Typography>
                   <div  className='col-md-12 col-sm-12'>
                   {/* STP 2 : Stripe */}
                   <Elements stripe={stripePromise}>
                     <StripeCheckoutFrom />
                   </Elements>
                   </div>
                </div>
                   ): <></>
                 }
                 {
                   clickCoin === 1 ?(
                <div className='col-md-12 col-sm-12 mb-5'>
                    <Typography variant=" " className='jss60 mb-4 text-left' gutterBottom component="div"> 
                      Pay with Collector Coin:
                    </Typography>
                    <Typography variant="body1" className='mb-4 text-left' gutterBottom component="div"> 
                    Instructions for how to pay with Collector Coin will be provided in the next step.
                    All you need is a MetaMask crypto wallet
                    </Typography>
                </div>
                   ): <></>
                 }
                 {
                   clickPaypal === 1 ?(
                <div className='col-md-12 col-sm-12 mb-5'>
                    <Typography variant=" " className='jss60 mb-4 text-left' gutterBottom component="div"> 
                    Paypal :
                    </Typography>
                    <Typography variant="body1" className='mb-4 text-left' gutterBottom component="div"> 
                    You will be redirected to the PayPal site after reviewing your order.
                    </Typography>

                </div>
                   ): <></>
                 }
                 </div>
             </div>
             <div className='col-md-4 col-md-12'>
             </div>
           </div>
        </div>
        <Link to="/review">
               <button  variant="contained"  
               style={{ padding: '10px 100px 10px 100px', background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
               >
                Next
               </button>
            </Link>
         
    </div>

 
    )
}

export default  Payment
