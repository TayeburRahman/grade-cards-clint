import GetAppIcon from '@mui/icons-material/GetApp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavDashboard = () => {
    const [focus, setFocuse] = useState(false)
    const onfocuse = () =>{
        setFocuse(true)
    }
    return (
        <div className='dashboardHeader'>
              <div className='dashboardHeader-div page__header'>
              <div className='d-flex'>
                  <img
                  src='https://i.ibb.co/KLW6hWP/ccc-logo-fb.png'
                  alt='up coming a new LOGO'
                  loading="lazy"
                  width='100%'
                  style={{filter: 'brightness(0) invert(1)'}}
                  />
            </div>
             <div className='page__header__auth'>
                 <button  className='ButtonHeder-m me-3'><Link to="/feed">Live Feet</Link></button>
                 <button className='ButtonHeder-m'>POP Report</button>
            </div>
         
            <div className='page__header__auth'> 
                   <Link to="/Service"><Button variant="text" className='ButtonHeder-submit'> <GetAppIcon/>submit</Button></Link>
                   <Button className='ButtonHeder-login ms-2'><PersonOutlineIcon/>log in</Button>
            </div>
              </div>
        </div>
    );
};

export default NavDashboard;