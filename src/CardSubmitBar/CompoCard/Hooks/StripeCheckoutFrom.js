import { Button } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { Fragment, useState } from 'react';
import useAuth from '../../../Firebase/Hook/useAuth';

// STP 3 : Stripe
function  StripeCheckoutFrom({promoFindPrice,prc, setPaymentId}) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError]= useState('')
    const [success, setSuccess]= useState('')
    const {user} = useAuth() 
 

  // ----------------------------
  //  const price = promoFindPrice? promoFindPrice : prc
  //   // --------------------------- 
  //   useEffect(()=>{
  //     fetch("https://ags-card-server.onrender.com/api/v1/create_payment",{
  //           method: "POST",
  //           headers: { "content-type": "application/json" },
  //           body: JSON.stringify({price}),
  //         })
  //           .then((res) => res.json())
  //           .then((result) => {
  //             console.log('result-post',result)
  //             if (result) { 
                
  //          } else {
  //        }})
  //     },[])
  
  //   // --------------------------------

    const handleSubmit = async (event) => { 
        const card = elements.getElement(CardElement);
         if (card == null) {
           return;
         }
        // Block native form submission.
        event.preventDefault();

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type:'card',
          card,
        }); 
        if (error) {
          setError(error)
        } else { 
          let submit ={}
           submit.payment = paymentMethod;  
           submit.price = promoFindPrice ? promoFindPrice : prc; 
           fetch(`https://ags-card-server.onrender.com/api/v1/submit/${user?.email}`,{
             method: "PATCH",
             headers: { "content-type": "application/json" },
             body: JSON.stringify(submit)
           })
             .then((res) => res.json())
             .then((result) => {
               console.log('result',result)
               if (result.massages) {  
                 setError('') 
                 setSuccess("Your Card Payment Success - Please click Next Button")
               } else { 
                setError('Server get error') 
               }
             });   
         }
     }    

    return (
       <Fragment>
           <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <Button className='mt-3' id='stripButton' type="submit" disabled={!stripe} >
            Add credit/debit card
          </Button>
         </form>
          {
            error && <p style={{color:"#830c0c",marginTop:"7px"}}>Error: {error.message}</p>
          }
          {
            success && <p style={{color:"green",marginTop:"7px"}}>{success}</p>
          }
       </Fragment>
    )
}

export default  StripeCheckoutFrom

// Stripe
// 1. install stripe and Stripe-React
// 2.set Publishable key
// 3. Elements 
// 4. Checkout From
// ---------------------
// 5. Create Payment method
// 6
