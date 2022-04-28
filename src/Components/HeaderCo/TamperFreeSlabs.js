import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import homeCart1 from '../../image/homeCart1.jpg';
import homeCart2 from '../../image/homeCart2.jpg';
import homeCart3 from '../../image/homeCart3.jpg';
import homeCart4 from '../../image/homeCart4.jpg';
import teem from '../../image/team.jpg';
import Untitled from '../../image/Untitled-1.jpg';
import './Home.css';


const  RoboGrading =[
    {
        h5: 'Feel Safer Buying & Selling Robograded cards',
        p: "The score of a RoboGraded card is consistent & thus more reliable. It doesn’t change if you grade it twice or the grader is having a bad day. The AI reads it consistently every single time!"
    },
    {
        h5: 'Get unbiased and fair grade',
        p: "To the Robot, your card is just a variation of pixels, and it doesn’t care who you are. It learns from expert graders and applies it to all. And because the scans are available in the public domain...there is just no way to cheat it!"
     },
     {
        h5: 'Be in control of your hobby',
        p: "When you get a 10,9,8, etc., you know exactly why. You have access to scans and scores for corners, edges, centering, and surface. No longer does the power lies with the graders, it lies with you"
    },
    
]

const AGSFuture =[
  {image: 'https://i.ibb.co/ch0V74M/future4.png',
  h5: 'Instant',
  p:'Current grading systems have a long wait time, sometimes lasting weeks. With AGS, you can grade your cards in minutes.'
  },
  {image: 'https://i.ibb.co/pyz07GS/future3.png',
  h5: 'Precise',
  p:'Our app looks for scratches, print lines, surface composition, and other microscopic details that can easily be missed by the human eye.'
  },
  {image: 'https://i.ibb.co/D9DdRkQ/future5.jpg',
  h5: 'Easy',
  p:'Get away from the tedious way of mailing your cards for grading. Download the app and grade away.'
  },
  {image: 'https://i.ibb.co/fHFD8Hw/future2.png',
  h5: 'Smart',
  p:'As our AI grading software grades more, it learns more. This allows you to get a more accurate grading than ever before.'
  },
  {image: 'https://i.ibb.co/LxnCvng/future1.png',
  h5: 'Accessible',
  p:'Current grading methods are tedious. With our revolutionary technology, we make grading accessible to one and all.'
  }

]
const TamperFreeSlabs = () => {
  
    return (
        <Fragment>
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
                    <Typography variant="subtitle2" id='fontWeight' gutterBottom component="div">
                      Standard Turnaround Time
                    </Typography>
                 </div>
                 <div className='col-md-3 col-sm-12 col-lg-3'>
                       <img
                        src={homeCart2}
                        alt='Standard Turnaround Time3'
                        loading="lazy"
                      />
                     
                    <Typography variant="subtitle2" id='fontWeight' gutterBottom component="div">
                     2x Turnaround Time
                    </Typography>
                 </div>
                 <div className='col-md-3 col-sm-12 col-lg-3'>
                       <img
                        src={homeCart3}
                        alt='Standard Turnaround Time'
                        loading="lazy"
                      />
                     <Typography variant="subtitle2" id='fontWeight' gutterBottom component="div">
                      Standard Turnaround Time
                    </Typography>
                 </div>
                 <div className='col-md-3 col-sm-12 col-lg-3'>
                       <img
                        src={homeCart4}
                        alt='Standard Turnaround Time'
                        loading="lazy"
                      />
                     <Typography variant="subtitle2" id='fontWeight' gutterBottom component="div">
                      Standard Turnaround Time
                    </Typography>
                 </div>
             </div>
        </div>
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
               </div>
               <div className='col-md-3 col-sm-12 col-lg-3'>
               <video id="player" playsinline controls data-poster="/path/to/poster.jpg" style={{width:"100%"}}>
                 <source src="https://media.istockphoto.com/videos/indian-businesswoman-start-videocall-conversation-talk-to-client-video-id1289259333" type="video/mp4" />
               </video>
                   
                  <Typography variant="h6" id='fontWeight' gutterBottom component="div">
                  Sarah Natochenny
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
       
        <div className='d-grid' style={{justifyItems: 'center'}}>
         <div className='  row d-flex pt-5 p-4 mt-1 mb-5'
           style={{alignItems: 'center'}}
           >
             <div className='col-md-7 col-lg-7 col-sm-12'>
                 <img
                  src='https://i.ibb.co/bHcL2Yk/New-Project-6.png'
                  alt='Standard Turnaround Time'
                  loading="lazy"
                  width="60%"
                />
             </div>
             <div className='col-md-5 col-lg-5 col-sm-12   textLeft'>
                <Box sx={{ fontStyle: 'oblique', m: 1, color:'#540387', fontSize: '20px' }}>Launching at the end of February 2022:</Box>
                 <Typography variant="h4" className='textHead textLeft pb-3' id=" " gutterBottom component="div"
                  sx={{ fontFamily: 'system-ui', letterSpacing: -0,}} 
                  >
                  Pre-grade your cards instantly with the AGS App. It’s free! 
                 </Typography>

                 <Typography variant="h5" className='textLeft' gutterBottom  
                 style={{fontSize: '24px !important',fontWeight:"700",fontFamily: 'system-ui' }}
                 >
                   Know your grades instantly before sending them out for paid grading. 
                 </Typography>

                 <Typography variant="subtitle1" className='textLeft p-2 pt-3' gutterBottom 
                 sx={{ fontFamily: 'cursive', }} 
                 style={{fontWeight: '200 !important', fontSize:'16px'}}
                 >
                Our flagship mobile app is re-imagining the way cards and collectibles are graded and allows you to use our machine learning technology to instantly add and grade any Pokemon Card. Android App coming soon!                
                </Typography>
                <Box className=' '>
                      <button className="button button1"
                      style={{background:'#1a2234'}}
                      >Download from App Store</button>
                </Box>
             </div>
             
           </div>
        </div>
        
        <div className='d-grid pt-5 pb-5'
        style={{justifyItems: 'center', background:'rgb(41 31 102)', color:"#d3d6e5"}}
        >
           <div className='container row d-flex pt-5 mt-1'>
             <div className='col-md-6 col-lg-6 col-sm-12'>
             <div className='player-wrapper mt-5'
                   style={{width:'50%'}}
                   >
                     <ReactPlayer
                       className='react-player2nd' id="react-player2nd"
                       url='https://youtu.be/eh3OY9LPQf0'
                     />
                  
             </div>
             </div>
             <div className='col-md-6 col-lg-6 col-sm-12 p-5 textLeft'>
                 <Typography variant="h4" className='textHead textLeft p-2' id="colorWhite" gutterBottom component="div"
                  sx={{ fontFamily: 'Monospace', letterSpacing: -2,}} 
                  >
                  How RoboGrading Works?
                 </Typography>
          
                 <Typography variant="subtitle1" className='textLeft p-2' gutterBottom 
                 sx={{ fontFamily: 'cursive', }} 
                 style={{fontWeight: '200 !important', fontSize:'16px'}}
                 >
                   Our Chief Robotics Officer shows you the FULL grading process at our AGS lab. Check out how it works from the beginning to the end. <br/> 
                   Submit your card to RoboGrading.com. Select the cards you want to grade and ship them to AGS and let us take care of the rest!
                </Typography>
             </div>
           </div>
        </div>
        <div>
           <div 
            className='pt-5'
            >
             <Typography variant="h4" className='textHead' gutterBottom component="div"
              sx={{ fontFamily:'system-ui', letterSpacing: -2}} 
             >
                Why AGS is the Future 
              </Typography>
               <div className='row p-5'
               style={{justifyContent:'space-evenly'}}
               >
                 {AGSFuture.map((rus) =>(
                    <div className='col-md-3 col-lg-2 col-sm-6'>
                    <img
                        src={rus.image}
                        alt='Standard Turnaround Time'
                        loading="lazy"
                        width="80%"
                     />
                      <Typography variant="h5" className='    p-2' gutterBottom  
                       style={{fontSize: '24px !important',fontWeight:"700",fontFamily: 'system-ui' }}
                       >
                     {rus.h5}
                    </Typography>
                    <Typography variant="subtitle1" className='  p-2' gutterBottom 
                      sx={{ fontFamily: 'cursive', }} 
                      style={{fontWeight: '200 !important', fontSize:'16px'}}
                      >
                      {rus.p}
                     </Typography>
                </div>
                 ))}
                   
                   <Link to="/register" className='menuText '><button className="button-34 p-3" role="button">Create an Account</button>
                   </Link>
               </div>
          </div>
        </div> 
        <div>
        <div>
           <div className='p-3 ms-4 mt-5'>
           <Typography variant="h4" className='textHead textLeft ' gutterBottom component="div"
            sx={{ fontFamily: 'Monospace', letterSpacing: -2}} 
           >
            Why switch to RoboGrading?
           </Typography>
           </div>
            <div className='row p-5'>
                 <div className='col-md-5 col-lg-6 col-sm-12'>
                     {
                         RoboGrading.map((text) =>(
                             <div className='col-12'>
                                  <Typography variant="h5" className='  textLeft p-2' gutterBottom  
                                  style={{fontSize: '24px !important',fontWeight:"700",fontFamily: 'system-ui' }}
                                  >
                                      {text.h5}
                                  </Typography>
                                  <Typography variant="subtitle1" className='textLeft p-2' gutterBottom 
                                   sx={{ fontFamily: 'cursive', }} 
                                  style={{fontWeight: '200 !important', fontSize:'16px'}}
                                  >
                                      {text.p}
                                  </Typography>
                             </div>
                         ))
                     }
                 </div>
                 <div className='col-md-5 col-lg-6  col-sm-12'>
                      <img
                         src={Untitled}
                         alt='Standard Turnaround Time'
                         loading="lazy"
                         width="100%"
                       />
                 </div>
            </div>
       </div>
        </div>
        <div className='d-grid pt-5 pb-5'
        style={{justifyItems: 'center', background:'rgb(41 31 102)', color:"#d3d6e5"}}
        >
           <div className='container row d-flex pt-5 mt-1'
           style={{alignItems: 'center'}}
           >
             <div className='col-md-7 col-lg-7 col-sm-12'>
                 <img
                  src={teem}
                  alt='Standard Turnaround Time'
                  loading="lazy"
                  width="100%"
                />
             </div>
             <div className='col-md-5 col-lg-5 col-sm-12 p-5 textLeft'>
                 <Typography variant="h4" className='textHead textLeft p-2' id="colorWhite" gutterBottom component="div"
                  sx={{ fontFamily: 'Monospace', letterSpacing: -2,}} 
                  >
                  Master P joins the Mission!
                 </Typography>
          
                 <Typography variant="subtitle1" className='textLeft p-2' gutterBottom 
                 sx={{ fontFamily: 'cursive', }} 
                 style={{fontWeight: '200 !important', fontSize:'16px'}}
                 >
                   The Grading industry has let us down. So we’re shaking it up with AGS: The most transparent, consistent, and accurate technology out there. We want to give more power to collectors and change the industry for good. Master P believes in the story and is now an investor and a part of the Board of Directors for AGS.
                </Typography>
                <Typography variant="h4" className='textHead textLeft p-2 mt-3' id="colorWhite" gutterBottom component="div"
                  sx={{ fontFamily: 'Monospace', letterSpacing: -2,}} 
                  >
                  Our Story
                 </Typography>
          
                 <Typography variant="subtitle1" className='textLeft p-2' gutterBottom 
                 sx={{ fontFamily: 'cursive', }} 
                 style={{fontWeight: '200 !important', fontSize:'16px'}}
                 >
                  We are a bunch of passionate card collectors who were put off with the existing grading methods; it was outdated, biased, and cryptic. And add to it the long waiting period, it just didn’t work for us. So we set out to make it safer, faster, and more inclusive for ourselves and for the community. 
                </Typography>
             </div> 
           </div>
        </div>
        
        </Fragment>
    );
};

export default TamperFreeSlabs;

 