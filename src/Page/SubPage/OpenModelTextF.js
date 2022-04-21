import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function OpenModelTextF({open, handleClose, onSubmit, update,uiText ,setValue}) {
 
 
   const handleChange =(e)=>{
    setValue(e.target.value)

   }
  return (
    <div> 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Updated  your profile! please enter your updated data. We
            will send {update} occasionally.
          </DialogContentText>
       
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            required
            label={uiText} 
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit}>Updated Password</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
