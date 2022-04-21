import React, { Fragment, useState } from 'react'
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import { Button } from '@material-ui/core';

// STP 3 : Stripe
function  StripeCheckoutFrom() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError]= useState('')

    const handleSubmit = async (event) => {

        const card = elements.getElement(CardElement);
         if (card == null) {
           return;
         }
        // Block native form submission.
        event.preventDefault();

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log(error.message)
          setError()
        } else {
          setError('')
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
          <Button className='mt-3' id='stripButton' type="submit" disabled={!stripe}>
          Add credit/debit card
          </Button>
         </form>
          {
            error && <p>Error: {error.message}</p>
          }
       </Fragment>
    )
}

export default  StripeCheckoutFrom

// Stripe
// 1. install stripe and Stripe-React
// 2.set Publishable key
// 3. Elemnets 
// 4. Checkout From
// ---------------------
// 5. Create Payment method
// 6
