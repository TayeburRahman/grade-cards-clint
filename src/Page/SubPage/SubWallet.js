import InfoIcon from '@mui/icons-material/Info';
import VillaIcon from '@mui/icons-material/Villa';
import { Tooltip, Typography } from '@mui/material';
import React from 'react';

const SubWallet = () => {
    return (
        <div className="d-grid mt-3" style={{justifyItems: 'center'}}>
        <div className='col-12 row d-flex boxShadow  pt-4 pb-4 ps-1'>
           <div className='col-6 textLeft'>
           <Typography variant="h6" component="h">
           Wallet
           </Typography>
           </div>
           <div  className='col-6 textRight'>
           <Tooltip title="Your balance will never expire. We'll automatically apply your Wallet Balance to eligible orders when you checkout. If you would rather not use your balance, you can deselect it when creating an order. Limitations: Your Wallet Balance cannot be transferred to other accounts.">
             <span>
             <InfoIcon/>
             </span>
           </Tooltip>
           </div>
        </div>
        <div className='col-12 mt-3 row' style={{justifyContent:' space-between'}}>
            <div className='col-md-7 col-lg-7 col-sm-12 boxShadow radius10 pt-5 pb-5'>
              
             <VillaIcon className='ms-2 iconColor'></VillaIcon>
            <Typography variant="hsubtitle1" display="block" gutterBottom style={{fontWeight:'500'}}>
            No Wallet History
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
            You have no wallet history. <br></br>
            Add to your wallet to get started.
            </Typography>
            </div>
            <div className='col-md-5 col-lg-5 col-sm-12'>
            <div className='boxShadow radius10 pt-5 pb-5 textLeft' style={{width: '97%', background:'#571ddd', color:'white'}}>
            <Typography variant="subtitle2" className='ms-4' gutterBottom component="div">
            Balance
            </Typography>
            <Typography variant="h4" className='ms-4' gutterBottom component="div">
                $0
            </Typography>
             </div>
           </div>
        </div>
    </div>
    );
};

export default SubWallet;