import { Button, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Firebase/Hook/useAuth';
import OpenModelTextF from './OpenModelTextF';


const SubProfile = () => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState()
  const [uiText, setUiText] = useState() 
  const [value, setValue]= useState('')
 
   

  const {user} = useAuth()
  const [users, setUser] =useState()   

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleClickOpen = (data,text) => {
    setUpdate(data)
    setUiText(text)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  


  const onSubmit = (dt) => {   


     if(update === 'displayName'){
      return users.uses.displayName = value
     } else if(update === 'userName'){
      return users.user.userName = value
     }else if(update === "password"){
      return users.user.password = value
     }else{
      return users.user.phone = value
     }

    console.log("data",users) 
    
    fetch(`http://localhost:5000/api/v1/users/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((result) => { 
        if (result.insertedId) {
         
          alert("Your Order Successfully Send"); 
        } 
      })

      handleClose()
  };

  

  
    return (
    <div className="d-grid mt-3" style={{justifyItems: 'center'}}>
        <div className='col-12 row d-flex boxShadow'>
           <div className='col-6 textLeft mt-4 mb-4 ms-1'>
           <Typography variant="h5" className='weight500' component="h">
           Profile
           </Typography>
           </div>
           <div  className='col-6 textRight'>
            
           </div>
        </div>
        <div className='col-12 boxShadow radius10 mt-3 textLeft'>
          <Typography variant="h6" className='textLeft mt-4 ms-3'  component="h6">
           Basic Info
           </Typography>
           <div className='col-12 p-3'>
               <div className='row d-flex centerIp'>
                   <div className='col-3'> 
                     <Typography variant="overline" display="block" gutterBottom>
                     PHOTO
                     </Typography>
                   </div>
                   <div className='col-7'> 
                     <Typography variant="body2" display="block" gutterBottom>
                      
                     </Typography>
                   </div>
                   <div className='col-2'> 
 
                   {/* <Button variant="text" className='editButton'>Eadt</Button> */}
                   </div>
               </div>
               <hr></hr>
               <div className='row d-flex centerIp'>
                   <div className='col-3'> 
                     <Typography variant="overline" display="block" gutterBottom>
                      NAME
                     </Typography>
                   </div>
                   <div className='col-7'> 
                     <Typography variant="body2" display="block" gutterBottom>
                     {users?.user?.displayName}
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton' onClick={() => handleClickOpen('displayName',"Full Name")}>Eadt</Button>
                   </div>
               </div>
               <hr></hr>
               <div className='row d-flex centerIp'>
                   <div className='col-3'> 
                     <Typography variant="overline" display="block" gutterBottom>
                     USERNAME
                     </Typography>
                   </div>
                   <div className='col-7'> 
                     <Typography variant="body2" display="block" gutterBottom>   
                     {users?.user?.userName ? users?.user?.userName : "--"}
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton' onClick={() => handleClickOpen('userName','User Name')}>Add</Button>
                   </div>
               </div>
               <hr></hr>
               <div className='row d-flex centerIp'>
                   <div className='col-3'> 
                     <Typography variant="overline" display="block" gutterBottom>
                     PASSWORD
                     </Typography>
                   </div>
                   <div className='col-7'> 
                   <ListItem type="password" > { users?.user?.password ? users.user?.password  : "******"} </ListItem>  
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton' onClick={() => handleClickOpen('password',"Password")}>Eadt</Button>

                   </div>
               </div>
               <hr></hr>
               <div className='row d-flex centerIp'>
                   <div className='col-3'> 
                     <Typography variant="overline" display="block" gutterBottom>
                     CUSTOMER ID
                     </Typography>
                   </div>
                   <div className='col-7'> 
                     <Typography variant="body2" display="block" gutterBottom>   
                    {users?.user?._id}
                     </Typography>
                   </div>
                   <div className='col-2'> 
                     <Typography variant="button" display="block" gutterBottom>
                     </Typography>
                   </div>
               </div>
           </div>
        </div>
        <div className='col-12 boxShadow radius10 mt-3 textLeft'>
          <Typography variant="h6" className='textLeft mt-4 ms-3'  component="h6">
          Contact Info
           </Typography>
           <div className='col-12 p-3'>
               <div className='row d-flex centerIp'>
                   <div className='col-3'> 
                     <Typography variant="overline" display="block" gutterBottom>
                       EMAIL
                     </Typography>
                   </div>
                   <div className='col-7'> 
                     <Typography variant="body2" display="block" gutterBottom>
                       {users?.user.email}
                     </Typography>
                   </div>
                   <div className='col-2'> 
                     <Typography variant="button" display="block" gutterBottom>
                       
                     </Typography>
                   </div>
               </div>
               <div className='row d-flex centerIp'>
                   <div className='col-3'> 
                     <Typography variant="overline" display="block" gutterBottom>
                       PHONE
                     </Typography>
                   </div>
                   <div className='col-7'> 
                     <Typography variant="body2" display="block" gutterBottom>
                     {users?.user?.phone ? users.user.phone : '--' }
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton' onClick={() => handleClickOpen('phone',"Phone")}>Eadt</Button>
                   </div>
               </div>
            </div>
            <OpenModelTextF handleClose={handleClose} update={update} setValue={setValue} uiText={uiText} onSubmit={onSubmit}  open={open}></OpenModelTextF>
        </div>
    </div>
    );
};

export default SubProfile;