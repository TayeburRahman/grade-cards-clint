import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Typography } from "@material-ui/core";
import { Input as AntdInput } from "antd";

function  ShippingFrom() {
    const { control, handleSubmit, register,formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };
    return (
         <div>
           <div className='d-flex'
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
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <div className='d-flex row mt-3'>
                 <div className='col-md-5 col-sm-5 text-left'
                 style={{ width:' 50%'}}
                 >
                <label className='mb-2'>First Name</label> <br></br>
                <Controller
                       render={({ field }) => <AntdInput 
                       id="addres" 
                       style={{padding:'7px'}}
                       {...field} />}
                       name="firstName"
                       control={control}
                       placeholder="Enter Your Passowerd"
                       defaultValue=""
                     />
                </div>
                <div className='col-md-5 col-sm-5 text-left'
                style={{width:' 50%'}}
                >
                     <label className='mb-2'>Second Name</label> <br></br>
                     <Controller
                       render={({ field }) => <AntdInput   
                       style={{padding:'7px'}}
                       id="addres" {...field} />}
                       name="lastName"
                       control={control}
                       defaultValue=""
                     />
                </div>
                 </div>
                 <div className='d-flex row mt-3'>
                 <div className='col-md-9 col-sm-12 text-left'>
                <label className='mb-2'>Address</label> <br></br>
                <Controller
                       render={({ field }) => <AntdInput  
                       style={{padding:'7px'}}
                       id="addres" {...field} />}
                       name="firstName"
                       control={control}
                       placeholder="Enter Your Passowerd"
                       defaultValue=""
                     />
                </div>
                <div className='col-md-3 col-sm-12 text-left'>
                     <label className='mb-2'>Apt # (optional)</label> <br></br>
                     <Controller
                       render={({ field }) => <AntdInput   
                       style={{padding:'7px'}}
                       id="addres" {...field} />}
                       name="lastName"
                       control={control}
                       defaultValue=""
                     />
                </div>
                 </div>
                 <div className='d-flex row mt-3'>
                 <div className='col-md-4 col-sm-12 text-left'
                 >
                <label className='mb-2'>City</label> <br></br>
                <Controller
                 
                       render={({ field }) => <AntdInput 
                       style={{padding:'7px'}}
                       id="addres"  {...field} />}
                       name="addres"
                       control={control}
                       placeholder="Enter Your Passowerd"
                       defaultValue=""
                       
                     />
                </div>
                <div className='col-md-8 col-sm-12 d-flex'
                style={{justifyContent: "space-around"}}
                >
                <div className='col-md-5 col-sm-5 text-left selecter gap-2'>
                  <label className='mb-2'>State</label> <br></br>
                   <select  id="addresCostom"  {...register("category")}
                     style={{padding:'7px'}}
                   >
                     <option value="">Select a State</option>
                     <option value="A">Category A</option>
                     <option value="B">Category B</option>
                   </select>
                </div>
                <div className='col-md-5 col-sm-5 text-left'>
                     <label className='mb-2'>Zip Code</label> <br></br>
                      <input
                      style={{padding:'7px'}}
                         id="password"
                         aria-invalid={errors.passward ? "true" : "false"}
                         {...register("password", {
                           required: "required",
                           minLength: {
                             value: 5,
                             message: "min length is 5"
                           }
                         })}
                         id="addresCostom" 
                         type="password"
                         placeholder=" Enter Zip Code"
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
                       id="addres" {...field} />}
                       name="number"
                       control={control}
                        defaultValue=""
                       
                     />
                   </div>
                 </div>
             </form>
            </div>
         </div>
    )
}

export default  ShippingFrom;
