import { ImageListItem, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { addToDb, removeFromDb } from './fakedb';
import useCart from './Hooks/useCart';
 

function  CartDeta({displayProduct}) {
    const [click, setClick] = useState()
    const [cart, setCart] = useCart();

    String.prototype.trimEllip = function (length) {
        return this.length > length ? this.substring(0, length) + ".." : this;
      }
      
      // product button
      const handelOnClick = (product) =>{
        console.log("product",product)
        const exists = cart.find((pd) => pd.id === product.id);
        if(!exists){
            const exists = cart.find((pd) => pd.id === product.id);
            let newCart = [];
            // if (exists) {
            //   const rest = cart.filter((pd) => pd.id !== product.id);
            //   exists.quantity = exists.quantity + 1;
            //   newCart = [...rest, product];
            // } else {
              product.quantity = 1;
              newCart = [...cart, product];
            // }
            setCart(newCart);
            addToDb(product.id);
            console.log('count 1',   cart)
          }
          else if(exists){
             const newCart = cart.filter(pd => pd.id !== product.id);
             setCart(newCart)
             removeFromDb(product.id)
            //  clearTheCart(cart)
             console.log('count 0', cart)
            }

    }
    return (
         <div className='mt-4'>
             <div className='d-flex col-md-12 col-sm-12'>
              <div className='col-6'>
              <Typography className="text-left" variant="caption" display="block" gutterBottom>
              {displayProduct.length} results
             </Typography>
              </div>
              <div className='col-6'>
              <Typography className="text-right" variant="caption" display="block" gutterBottom>
              Can't find your card? <span><button
              style={{  textDecoration: 'none', border: '0', color:"rgba(32, 191, 184)"}}
              >Add Card Manually</button> </span>
             </Typography>
              </div>
             </div>
            <div className=' ' Garamond Serif style={{height:'400px',border:'1px solid #ccc', font:'16px/26px Georgia', overflow:'auto'}}>
            <div>
                  {
                      displayProduct.map((pd)=>(
                        <ListItem
                         key={pd.id}
                         onClick={()=>handelOnClick(pd)}
                         button>
                           <div className='row'>
                              <div className='col-2'>
                               <ImageListItem>
                                 <img
                                  className='imgCrt'
                                  src={pd.images.small}
                                  loading="lazy"
                                />
                               </ImageListItem>
                               </div>
                              <div className='col-10'>
                               <Typography variant="subtitle2" component="div">
                                {pd.artist} 
                               </Typography>
                               <Typography className='text-left' variant="body2" component="div">
                                {pd?.set?.series} 
                               </Typography>
                               <Typography className='text-left' variant="body2" component="div">
                                {pd?.rules[0].slice(0,50)}
                               </Typography>
                              </div>
                           </div>
                        </ListItem>
                      ))
                  }
            </div>
             
        </div>
         </div>
    )
}

export default  CartDeta;
