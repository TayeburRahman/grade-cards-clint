import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { removeFromDb } from './fakedb';
import useCart from './Hooks/useCart';
import './ServiceData.css';


function AddedCardLast({value}) {
    const [cart, setCard] = useCart();
 
 
 
    return (
        <Fragment>
                <Fragment>
                {
                value || cart.length ?
                <div className='col-12 mt-5 d-grid'>
                   <Typography className='text-left smHedingText mb-3 mt-3' variant="none" gutterBottom >
                   Added Card(s)
                   </Typography>
                    <Box className="d-flex">
                        <Box className='col-6 gap-3 d-flex pe-5 me-5'
                        style={{justifyContent: 'space-around'}}
                        >
                           <Typography variant="subtitle2" gutterBottom >
                            Qty
                           </Typography>
                           <Typography variant="subtitle2" gutterBottom >
                            Card(s)
                           </Typography>
                        </Box>
                        <Box className="col-6">
                           <Typography variant="subtitle2" gutterBottom >
                           Value (USD)	
                           </Typography>
                        </Box>
                    </Box>
                    <hr></hr>
                </div>
                :
                <div></div>
            }
                <div className='col-12 mt-4'>
                     {cart.map((cart) => (
                         <div className="d-flex mb-2  p-2"
                         style={{alignItems: 'center' , justifyContent: 'center',
                         boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                        }}
                         
                         >
                             <Box className=' '>
                             {/* <input
                               style={{padding: '7.5px 7px', border: "1px solid rgb(199 199 199)",borderRadius: '4px'}}
                               type="number"
                               min={0}
                               max={100}
                               step={1}
                               value={num}
                               onChange={e => handleChange(e.target.value,cart.id)}
                             /> */}
                             </Box>
                             <Box className='col-md-1 col-sm-3'>
                             <img
                                  src={cart.images.small}
                                  loading="lazy"
                                  width="80%"
                                />
                             </Box>
                             <Box className='d-grid text-left col-md-4 col-sm-8' >
                             <Typography variant="subtitle2" component="div">
                                {cart.artist} 
                               </Typography>
                               <Typography className='text-left' variant="body2" component="div">
                                {cart?.set?.series} 
                               </Typography>
                               <Typography className='text-left' variant="body2" component="div">
                                {cart?.rules[0].slice(0,50)}
                               </Typography>
                             </Box>
                             <Box  className='col-md-3 col-sm-6'>
                                 <input
                                  style={{padding: '4.5px 6px', border: "rgb(205 205 205)",borderRadius: '4px',padding: '7.5px 7px', border: "1px solid rgb(199 199 199)",borderRadius: '4px',    width: '100%'}}
                                 className='textField'
                                     id="outlined-name"
                                     placeholder='$'
                                     label="$" 
                                 />
                             </Box>
                             <Box className='col-md-2 col-sm-6'>
                             <IconButton 
                                onClick={()=> removeFromDb(cart.id) }
                                edge="end" 
                                aria-label="delete">
                                <DeleteIcon />
                             </IconButton> 
                             </Box>
                         </div>
                     ))}
                </div>
                </Fragment>
              
        </Fragment>
    )
}

export default AddedCardLast

 