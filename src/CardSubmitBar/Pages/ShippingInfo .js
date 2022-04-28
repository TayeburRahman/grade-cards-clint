import React, { useState } from 'react'
import MetaData from '../../MetaData'
import useCart from '../CompoCard/Hooks/useCart'
import PriceList from '../CompoCard/PriceList'
import ShippingFrom from '../CompoCard/ShippingFrom'
import users from "../Images/download (1).svg"
import img from "../Images/download.svg"
import CheckoutSteps from './CheckoutSteps'



function  ShippingInfo() {
 
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useCart();
 
// ------------------------------
  const price = cart.length * 20;
// ----------------------------------
 
    return (
        <div className='mainsection'>
           <MetaData title={'Shipping Info'} />
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
             <div className='text'>
                <h2>Submit Cards For Grading</h2>
               </div>
               <div className='CheckoutStepsMainPage'>
                 <CheckoutSteps service cards shipping ></CheckoutSteps>
               </div>
           </div>
           <div className='lastSection d-grid'>
               <div className='row text-left mt-5 p-3 d-flex'>
                 <h2 className='h2-style '>
                      Enter shipping details
                     </h2>
                     <p>
                     Select your preferred return shipping method and <br></br> enter your return shipping address
                     </p>
                 
               </div>
               <div className='row flexRevers'>
                  <div className='col-md-8 col-sm-12'>
                    <ShippingFrom price={price}></ShippingFrom>
                  </div>
                  <div className='col-md-4 col-sm-12 mb-5'>
                     <PriceList
                     length= {cart.length}
                     price={price}
                     ></PriceList>
                  </div>
               </div>
           </div>
     </div>
    )
}

export default  ShippingInfo
