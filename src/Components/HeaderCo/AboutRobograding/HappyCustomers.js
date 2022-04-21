import React, { Fragment } from 'react';
import { Typography } from '@mui/material';
import homeCart1 from '../../../image/homeCart1.jpg'
import homeCart2 from '../../../image/homeCart2.jpg'
import homeCart3 from '../../../image/homeCart3.jpg'
import homeCart4 from '../../../image/homeCart4.jpg'
 
const HappyCustomers = () => {
    return (
        <Fragment>
             <div className='mt-3 p-3'>
           <Typography variant="h4" className='textHead' gutterBottom component="div"
            sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
           >
             Join 5,000 happy customers
           </Typography>
           <div className='row p-5'>
               <div className='col-md-3 col-sm-12 col-lg-3'>
                <div>
                <video id="player" playsinline controls data-poster="/path/to/poster.jpg" style={{width:"100%"}}>
                 <source src="https://media.istockphoto.com/videos/young-businessman-talk-on-webcam-having-video-call-video-id1324494216" type="video/mp4" />
               </video>
                </div>
                  <Typography variant="h6" id='fontWeight' gutterBottom component="div">
                  Gary King Pokemon
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                   Owns $10 million TCG collection
                  </Typography>
               </div>
               <div className='col-md-3 col-sm-12 col-lg-3'>
               <video id="player" playsinline controls data-poster="/path/to/poster.jpg" style={{width:"100%"}}>
                 <source src="https://media.istockphoto.com/videos/indian-businesswoman-start-videocall-conversation-talk-to-client-video-id1289259333" type="video/mp4" />
               </video> 
                  <Typography variant="h6" id='fontWeight' gutterBottom component="div">
                  Sarah Natochenny
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                  Owns $10 million TCG collection
                 </Typography>
               </div>
               <div className='col-md-3 col-sm-12 col-lg-3'>
               <video id="player" playsinline controls data-poster="/path/to/poster.jpg" style={{width:"100%"}}>
                 <source src="https://media.istockphoto.com/videos/woman-looking-at-camera-greeting-videocall-participant-feels-happy-video-id1285827645" type="video/mp4" />
               </video>
                   <Typography variant="h6" id='fontWeight' gutterBottom component="div">
                   Mark Davis
                  </Typography>
               </div>
               <div className='col-md-3 col-sm-12 col-lg-3'>
               <video id="player" playsinline controls data-poster="/path/to/poster.jpg" style={{width:"100%"}}>
                 <source src="https://media.istockphoto.com/videos/male-doctor-on-a-video-call-from-the-office-video-id592640734" type="video/mp4" />
               </video>
              <Typography variant="h6" id='fontWeight' gutterBottom component="div">
              John Mavis
              </Typography>
             </div>
           </div> 
        </div> 
        <div className='mt-5'> 
            <Typography variant="h4" className='textHead' gutterBottom component="div"
             sx={{ fontFamily: 'system-ui', letterSpacing: -2}} 
            >
               Clean, Beautiful & Tamper-free Slabs
            </Typography>
            <div className='row p-4'>
                <div className='col-md-3 col-sm-12 col-lg-3'>
                     <img
                       src={homeCart1}
                       alt='Standard Turnaround Time'
                       loading="lazy"
                     /> 
                </div>
                <div className='col-md-3 col-sm-12 col-lg-3'>
                      <img
                       src={homeCart2}
                       alt='Standard Turnaround Time3'
                       loading="lazy"
                     />
                     
                </div>
                <div className='col-md-3 col-sm-12 col-lg-3'>
                      <img
                       src={homeCart3}
                       alt='Standard Turnaround Time'
                       loading="lazy"
                     /> 
                </div>
                <div className='col-md-3 col-sm-12 col-lg-3'>
                      <img
                       src={homeCart4}
                       alt='Standard Turnaround Time'
                       loading="lazy"
                     /> 
                </div>
            </div>
       </div>
        </Fragment>
 
    );
};

export default HappyCustomers;