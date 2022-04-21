import { Button, Typography } from '@mui/material';
import React from 'react';

const SubProfile = () => {
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
                     Personalize your account with a photo
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton'>Eadt</Button>
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
                     Tayebur Rahman
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton'>Eadt</Button>
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
                        tayebur
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton'>Eadt</Button>
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
                     <Typography variant="body2" display="block" gutterBottom>   
                      ********
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton'>Eadt</Button>

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
                     C00011447
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
                       tayebrayhan101@gmail.com
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
                     --
                     </Typography>
                   </div>
                   <div className='col-2'> 
                   <Button variant="text" className='editButton'>Eadt</Button>
                   </div>
               </div>
            </div>
        </div>
    </div>
    );
};

export default SubProfile;