import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StyleIcon from '@mui/icons-material/Style';
import VillaIcon from '@mui/icons-material/Villa';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {
  Link, Switch,
  useRouteMatch
} from "react-router-dom";
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import useAuth from '../Firebase/Hook/useAuth';
import profileComon from '../image/profile-comon.svg';
import './Dashboard.css';
import SubCard from './SubPage/SubCard';
import Submissions from './SubPage/Submissions';
import SubProfile from './SubPage/SubProfile';
import SubWallet from './SubPage/SubWallet';

 

export const useFeed= ()=>{
  let { path, url } = useRouteMatch(); 

  return{
    path
  }
}
export default function Dashboard() {
  let { path, url } = useRouteMatch(); 
  const {user,logOut} = useAuth()
  return (
    <Box sx={{ display: 'flex', justifyContent: 'normal' }} >
      <CssBaseline />
       <div className='w35d'>
       <Drawer
       style={{top: 'auto !important'}}
        sx={{ 
          flexShrink: 0,
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className='contoler pb-3'>
        <div className='row mt-3 mb-2 d-flex' style={{alignItems: 'center'}}>
         <div className='col-3'>
           {
             user.photoURL ?

             <img
             style={{borderRadius:"50%"}}
             src={user.photoURL } 
             alt='profile12'
             loading="lazy"
             width='80%'
           /> :
           <img
           src={profileComon} 
           alt='profile12'
           loading="lazy"
           width='100%'
         />

           }
         
         </div>
         <div className='col-9 textLeft'>
           <Typography  className='textLeft' variant="h6" gutterBottom component="div">
             {user.displayName}
           </Typography>
          
              <Button  className='textLeft' onClick={logOut}>
               <Typography className='textLeft' variant="button" display="block" gutterBottom>
                 SING OUT
               </Typography>
             </Button>
            
         </div>
       </div>    
        <Divider />
          <Box>
          <Link className="mt-3" to={`${url}`} style={{ textDecoration: "none",color:'#3b3f42'}}>
              <Button  id="buttonHover" className="flexStart mt-3" variant="text">
                 <Inventory2Icon className='ms-2   iconColor'></Inventory2Icon>
                 <Typography variant="hsubtitle1" className='ms-3' display="block" gutterBottom style={{fontWeight:'500', color:'rgb(67 71 90)'}}>
                 Submissions
                 </Typography>
             </Button>
           </Link>
           
          <Link className='' to={`${url}/cards`} style={{ textDecoration: "none",color:'#3b3f42'}}>
             <Button id="buttonHover" className="flexStart" variant="text">
                 <StyleIcon className='ms-2 iconColor'></StyleIcon>
                 <Typography variant="hsubtitle1" className='ms-3' display="block" gutterBottom style={{fontWeight:'500', color:'rgb(67 71 90)'}}>
                  Your Cards
                 </Typography>
                 
             </Button>
          </Link>
           
           <Link className='' to={`${url}/wallet`} style={{ textDecoration: "none",color:'#3b3f42'}}>
             <Button  id="buttonHover" className="flexStart" variant="text">
                 <VillaIcon className='ms-2 iconColor'></VillaIcon>
                 <Typography variant="hsubtitle1" className='ms-3' display="block" gutterBottom style={{fontWeight:'500', color:'rgb(67 71 90)'}}>
                  Wallet
                 </Typography>
             </Button>
           </Link>
           
           <Link className='' to={`${url}/profile`} style={{ textDecoration: "none",color:'#3b3f42'}}>
             <Button  id="buttonHover" className="flexStart" variant="text">
                 <AccountCircleIcon className='ms-2 iconColor'></AccountCircleIcon>
                 <Typography variant="hsubtitle1" className='ms-3' display="block" gutterBottom style={{fontWeight:'500', color:'rgb(67 71 90)'}}>
                   Profile
                 </Typography>
             </Button>
           </Link>
          </Box>
        </div>
      </Drawer>
      <Drawer/>
       </div>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
      >
      <Switch>
        <PrivateRoute exact path={`${path}`}>
          <Submissions></Submissions>
        </PrivateRoute>
        <PrivateRoute path={`${path}/cards`}>
          <SubCard></SubCard>
        </PrivateRoute>
        <PrivateRoute path={`${path}/wallet`}>
          <SubWallet></SubWallet>
        </PrivateRoute>
        <PrivateRoute path={`${path}/profile`}>
          <SubProfile></SubProfile>
        </PrivateRoute>
      </Switch>
      </Box>
    </Box>
  );
}

 