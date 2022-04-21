import React from 'react';
import { Box, Typography } from '@mui/material';
import {   Switch, Route, } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../image/logo.png'
import './Footer.css'
import twitter from '../../image/towtter.png'
import instagram from '../../image/instagram.png'
import game from '../../image/game.ico'
import send from '../../image/send.png'
import email from '../../image/email.png'




const Footer = () => {
    return (
        <div className=' footerBg pt-5 pb-5'>
            <div className='row mt-5 p-5 '>
            <div className='col-md-6 col-lg-6 col-sm-12 d-flex row'
             style={{color:'#d3d7e3'}}
            >
                <div className='col-md-4 col-lg-4 col-sm-12'>
                    <Navbar.Brand href="#home"> 
                      <img src={logo} className="img-fluid textLeft mt-2" alt="..." width='70%' />
                    </Navbar.Brand>
                    <Typography className='textLeft mt-4' variant="body2" gutterBottom>Call: <samp style={{fontWeight: 700}}>   +1 929-209-3925  </samp> </Typography>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-6 textLeft'>
                  <Typography variant="subtitle2" component="div" gutterBottom
                    style={{fontSize: '15px', color:'white'}}
                  >
                   Important Information
                  </Typography>
                       <Typography variant="body2" component="div" gutterBottom>
                         How to Collect
                        </Typography> 
                        <Typography variant="body2" component="div" gutterBottom>
                         Media
                        </Typography>  
                        <Typography variant="body2" component="div" gutterBottom>
                        Robograding
                        </Typography> 
                     <Navbar.Brand href="/home"> 
                     </Navbar.Brand> 
                </div>
                <div className='col-md-4 col-lg-4 col-sm-6 textLeft'>
                  <Typography variant="subtitle2" component="div" gutterBottom
                  style={{fontSize: '15px', color:'white'}}
                  >
                   Collaborate
                  </Typography>
                       <Typography variant="body2" component="div" gutterBottom>
                       Invest in the Project
                        </Typography> 
                        <Typography variant="body2" component="div" gutterBottom>
                        Promote Us
                        </Typography>  
                        <Typography variant="body2" component="div" gutterBottom>
                        Test the App
                        </Typography> 
                     <Navbar.Brand href="/home"> 
                     </Navbar.Brand> 
                </div>
            </div>
            <div className='col-md-6 col-lg-6 col-sm-12 textLeft row'
            style={{color:'#d3d7e3'}}
            >
                 <div className='col-md-4 col-lg-4 col-sm-12'>
                       <Typography variant="subtitle2" component="div" gutterBottom
                       style={{fontSize: '15px', color:'white'}}
                       >
                        Useful Links
                       </Typography>
                            <Typography variant="body2" component="div" gutterBottom>
                             Home
                             </Typography> 
                             <Typography variant="body2" component="div" gutterBottom>
                             About AGS 
                             </Typography>  
                             <Typography variant="body2" component="div" gutterBottom>
                             About Collector Coin
                             </Typography>  
                 </div>
                 <div className='col-md-8 col-lg-8 col-sm-12'>
                     <div className='d-flex mb-4 icon-div'>
                         <Box className='icon-box'>
                             <Navbar.Brand href="#home"> 
                               <img src={twitter} className="mt-2 ms-2" alt="..." width='70%' />
                             </Navbar.Brand>
                         </Box>
                         <Box className='icon-box ms-2'>
                             <Navbar.Brand href="#home"> 
                               <img src={instagram} className="mt-2 ms-2" alt="..." width='58%' />
                             </Navbar.Brand>
                         </Box>
                         <Box className='icon-box ms-2'>
                             <Navbar.Brand href="#home"> 
                               <img src={game} className="mt-2 ms-2" alt="..." width='65%' />
                             </Navbar.Brand>
                         </Box>
                         <Box className='icon-box ms-2'>
                             <Navbar.Brand href="#home"> 
                               <img src={send} className="mt-2 ms-2" alt="..." width='65%' />
                             </Navbar.Brand>
                         </Box>
                         <Box className='icon-box ms-2'>
                             <Navbar.Brand href="#home"> 
                               <img src={email} className="mt-2 ms-2 " alt="..." width='70%' />
                             </Navbar.Brand>
                         </Box>
                     </div>
                        <Typography variant="body2" component="div" gutterBottom>
                        Collector Coin Token Address:
                         </Typography> 
                         <Typography variant="body2" component="div" gutterBottom>
                         BSC: 0x73ffdf2d2aFB3Def5b10bF967Da743F2 
                         </Typography>  
                         <Typography variant="body2" component="div" gutterBottom>
                         Ethereum: 0x667fd83e24ca1d935d36717d305d54f 
                         </Typography>  
                 </div>
            </div>
            </div>
            <div className='col-12'
            style={{color: 'white'}}
            >
                 <Typography variant="caption" display="block" gutterBottom>
                 Copyright © 2021 AGS Inc. <span style={{color:'#5600ff'}}>All Rights Reserved.</span>
                 </Typography>
            </div>
        </div>
    );
};

export default Footer;