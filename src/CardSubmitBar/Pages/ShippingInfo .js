import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../../MetaData'
import useCart from '../CompoCard/Hooks/useCart'
import PriceList from '../CompoCard/PriceList'
import ShippingFrom from '../CompoCard/ShippingFrom'
import user from "../Images/download (1).svg"
import img from "../Images/download.svg"
import CheckoutSteps from './CheckoutSteps'


function  ShippingInfo() {
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useCart();
  const price = cart.length * 20;

  useEffect(() => {
    fetch("/allOder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  
    return (
        <div className='mainsection'>
           <MetaData title={'Shipping Info'} />
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
                 <CheckoutSteps service cards shipping className=" "></CheckoutSteps>
               </div>
           </div>
           <div className='lastSection d-grid'>
               <div className='row text-left mt-5 d-flex'>
                 <div>
                 <h2 className='h2-style '>
                      Enter shipping details
                     </h2>
                     <p>
                     Select your preferred return shipping method and <br></br> enter your return shipping address
                     </p>
                 </div>
               </div>
               <div className='row'>
                  <div className='col-md-8 col-sm-12'>
                    <ShippingFrom></ShippingFrom>
                  </div>
                  <div className='col-md-4 col-sm-12'>
                     <PriceList
                     length= {cart.length}
                     price={price}
                     ></PriceList>
                  </div>
               </div>
           </div>
           <Link to="/payment">
               <button  variant="contained"  
               style={{ padding: '10px 100px 10px 100px', background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
               >
                Next
               </button>
            </Link>
    </div>
    )
}

export default  ShippingInfo
