import FormControl from '@mui/material/FormControl'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../../MetaData'
import ServiceData from '../CompoCard/ServiceData'
import user from "../Images/download (1).svg"
import img from "../Images/download.svg"
import CheckoutSteps from './CheckoutSteps'
import './MainPage.css'
  
function  Service() {
  const [selectedvalue, setSelectedValue] = useState({});
  console.log('selectedValue', selectedvalue)

  const [product, setProduct] = useState([]);
  console.log(product);

  const [isUpdate, setIsUpdate] = useState(null);
// ------------------------------------
  const onSubmit = (data) => {
    console.log("data",data)
    fetch("/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Order Successfully Send"); 
        }
      });
  };
// --------------------------------------
  useEffect(() => {
    fetch(" /product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // ------------------------------------
  // const onSubmit = (data) => { 
  //   const url = `/${id._id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(id),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result.modifiedCount) {
  //         alert("Update Successful");
  //         setIsUpdate(true);
  //       } else {
  //         setIsUpdate(false);
  //       }
  //     });
  // };
 
    return (
        <div className='mainsection '>
          <MetaData title={'User Service'} />
        <div className='row fastRow '>
             <div className='d-flex container logoContainer'
             style={{justifyContent: 'space-between'}}
             >
             <div className='text-left logo'>
              <img src={user}    />
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
        <div className=' container lastSection '
         style={{justifyContent: 'space-around'}}
        >
          
          <div className='row col-md-7 text-left d-flex'
          style={{
            margin: '100px 0px 25px 0px'
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
        <div className='d-flex container ThardSection '
          style={{justifyContent: 'space-around'}}
        >
          <ServiceData setSelectedValue={setSelectedValue}></ServiceData>
        </div>
        <FormControl>
    </FormControl>

        
        <div className='d-flex mt-5 mb-5'
          style={{justifyContent: 'space-around'}}
        >
           <Link onSubmit={(e)=> selectedvalue(e)} to="/cards">
               <button  variant="contained"  
               style={{ padding: '10px 100px 10px 100px', background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
               >
                Next
               </button>
            </Link>
        </div>
       
        
         
    </div>
        
    )
}

export default  Service
