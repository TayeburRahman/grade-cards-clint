import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Fragment } from 'react';

export default function OpenModelTextF({open, handleClose, onSubmit, update,uiText,setValuePass ,setValue, value,passAlert}) {
 
   const handleChange =(e)=>{
    setValue(e.target.value)
   }

   const handleChangePass =(e)=>{
    setValuePass(e.target.value)
   }






   
  return (
    <div> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{color:"#6c31bc"}}>Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Updated  your profile! please enter your updated data. We
            will send {update} occasionally.
          </DialogContentText>

           {
             passAlert == 'Password is no Massing' ? <Alert severity="error">{passAlert}</Alert> :  <Fragment/> 


           }
       
           { update === "password" ? 
            <TextField
            onChange={handleChangePass}
            autoFocus
            margin="dense"
            id="name"
            required
            label="Old Password"
            fullWidth
            variant="standard"
          />:
          <Fragment></Fragment>
           
             
           }
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            required
            label={update === "password" ? "New Password" : uiText} 
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button style={{color:"lightcoral"}} onClick={handleClose}>Cancel</Button>
          <Button style={{color: value? "rgb(10, 189, 186)":"tomato"}} onClick={onSubmit}> {value ?  `Updated ${uiText}` : `Remove ${uiText}`}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
