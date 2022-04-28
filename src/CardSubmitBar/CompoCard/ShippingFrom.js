import { Checkbox, Typography } from "@material-ui/core";
import { Button, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { Input as AntdInput } from "antd";
import React, { Fragment, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Firebase/Hook/useAuth";


function  ShippingFrom() {
    const [loading, setLoading] = useState(false) 
    let history = useHistory();
    const {user} = useAuth()
    const { control, handleSubmit, register,formState: { errors }, reset } = useForm();

    const onSubmit = (data) => { 
      setLoading(true)
      let submit ={}
      submit.shipping = data; 
      fetch(`http://localhost:5000/api/v1/submit/${user?.email}` ,{
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(submit),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log('result',result)
          if (result.massages) { 
            setLoading(false)
            history.push("/submission_payment_new")
          } else {
             
          }
        });  
    };
    return (
         <Fragment>
           <div className='d-flex ps-3 pe-3'
           style={{alignContent: 'normal'}}
           >
             <div className='col-md-6 col-sm-6 text-left'>
             <Typography variant=" " className='jss60' gutterBottom component="div"> 
              New Shipping Address
             </Typography>
             </div>
             <div className='col-md-6 col-sm-6 text-right'>
             <Controller
               name="Checkbox"
               control={control}
               render={({ field }) => <Checkbox {...field} />}
             /> Save for later
             </div>
           </div> 
            <form onSubmit={handleSubmit(onSubmit)} className="ps-3 pe-3">
                 <div className='d-flex row mt-3'>
                 <div className='col-md-5 col-sm-5 text-left'
                 style={{ width:' 50%'}}
                 >
                <label className='mb-2'>First Name</label> <br></br>
                <Controller
                       render={({ field }) => <AntdInput 
                       className="customWidth"
                       placeholder="Enter Fast Name"
                       style={{padding:'7px'}}
                       {...field} />}
                       name="firstName"
                       control={control}   
                     />
                </div>
                <div className='col-md-5 col-sm-5 text-left'
                style={{width:' 50%'}}
                >
                     <label className='mb-2'>Second Name</label> <br></br>
                     <Controller
                       render={({ field }) => <AntdInput   
                       placeholder="Enter Second Name"
                       style={{padding:'7px',marginLeft:"6px"}}
                       className="customWidth"{...field} />}
                       name="lastName"
                       control={control}
                       rules={{ required: true }}
                     />
                </div>
                 </div>
                 <div className='d-flex row mt-3'>
                 <div className='col-md-9 col-sm-12 text-left'>
                <label className='mb-2'>Address</label> <br></br>
                <Controller
                       render={({ field }) => <AntdInput  
                       placeholder="Enter Street Address"
                       style={{padding:'7px'}}
                       id="addres" {...field} />}
                       required
                       name="addres"
                       rules={{ required: true }}
                       control={control} 
                     />
                </div>
                <div className='col-md-3 col-sm-12 text-left'>
                     <label className='mb-2'>Apt # (optional)</label> <br></br>
                     <Controller
                       render={({ field }) => <AntdInput 
                       style={{padding:'7px'}}
                       placeholder="Atp #"
                       id="addres" {...field} />} 
                       name="apt"
                       rules={{ required: true }}
                       control={control} 
                        
                     />
                </div>
                 </div>
               <div className='row mt-3'>
                 <div className='col-md-4 col-sm-12 text-left'
                 >
                <label className='mb-2'>City</label> <br></br>
                <Controller 
                       render={({ field }) => <AntdInput 
                       style={{padding:'7px'}}
                       placeholder="Enter City"
                       rules={{ required: true }}
                       id="addres"  {...field} />}
                       name="city" 
                       rules={{ required: true }}
                       className="customWidth"
                       control={control}
                     />
                 </div>
                 <div className='col-md-8 col-sm-12 d-flex'
                 style={{justifyContent: "space-around"}}
                 >
                   <div className='col-6 text-left'>
                     <label className='mb-2'>State</label> <br></br>
                      <select required name="state" className="customWidth"  {...register("category",{
                         required: "required",
                      })} 
                      >
                        <option value="">Select a State</option>
                        <option value="A">AB</option>
                        <option value="A">AC</option>
                        <option value="A">AD</option>
                        <option value="A">AF</option>
                        <option value="A">BA</option>
                        <option value="B">BB</option>
                        <option value="B">BF</option>
                        <option value="B">CB</option>
                      </select>
                   </div>
                   <div className='col-6 text-left'>
                        <label className='mb-2'>Zip Code</label> <br></br>
                         <input
                         style={{padding:'7px'}}
                           required
                            name="zipCode"
                            id="password"
                            aria-invalid={errors.passward ? "true" : "false"}
                            {...register("password", {
                              required: "required",
                               minLength: {
                                value: 5,
                                message: "min length is 5"
                              }
                            })}
                            className="customWidth"
                            type="password"
                            placeholder=" Enter Zip Code"
                            style={{marginLeft:'4px'}}
                         />
                   </div>
                </div>
                </div>
                 <div className='d-flex row mt-3'>
                   <div className='col-md-12 col-sm-12 text-left'
                   >
                   <label className='mb-2'>Phone Number</label> <br></br>
                   <Controller
                       render={({ field }) => <AntdInput 
                       placeholder="Enter Your Phone number"
                       style={{padding:'15px'}}
                       id="phone" {...field} />} 
                       name="phone"
                       control={control} 
                       rules={{ required: true }}
                     />
                   </div>
                 </div>
                  <div className="d-grid justifyContentEnd mt-5" >
                      <div className="positionFixedBottom" >
                       <Link to="/submission_cards_new" className="m-2">
                         <Button className=' ' variant="contained" style={{ padding: '10px 50px 10px 50px', background:"rgb(156 156 156 / 57%)",color: '#323232', border: '0'}} >
                          <Typography>Back</Typography> 
                          </Button>
                       </Link>
                       <button className="m-2" type='submit' variant="contained"   
                       style={{ padding: '10px 60px 10px 60px',borderRadius:"5px" ,background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
                       > {loading ?
                           <Box sx={{ display: 'flex' }}>
                             <CircularProgress />
                           </Box> :
                           <Typography> Next</Typography> 
                       }  
                       </button> 
                      </div>
                  </div>
            </form> 
         </Fragment>
    )
}

export default  ShippingFrom;
