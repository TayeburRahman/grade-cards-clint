import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 

const SingleCardD = () => {
    const { cardID } = useParams(); 
    const [ feedCard, setFeedCard] = useState([])
    console.log("cardId", feedCard)
  
    useEffect(() => {
      fetch("./Pockmon.json")
        .then((res) => res.json())
        .then((data) => setFeedCard(data.find((data) => data.id === cardID)));
    }, []);

    return (
        <Fragment>
             <div className='row feed-view__header'>
                 <div className='feed-view__header__overlay'>
                     <img
                        className='feed-view__header__overlay-background'
                        src={feedCard?.images?.large}
                        alt="{row.images.small}"
                        loading="lazy" 
                      />
                      <div className='feed-view__header__overlay-color'></div>
                 </div>
                 <div className='feed-view__header__container'>
                     <div className='feed-view__card-holder'></div>
                      <div className='row feed-view__header__content'>
                         <div className='row col-10 textLeft'>
                            <div className='col-10'>
                              <Typography variant="overline">
                                  CERTIFICATE #0000{feedCard?.hp}
                               </Typography>
                               <Typography variant="h3" >
                                 {feedCard?.artist}
                               </Typography>
                               <Typography variant="subtitle1" gutterBottom component="div">
                                 {feedCard?.rules?.slice(0,70)}
                               </Typography>
                            </div>
                         </div>
                         <div className='col-2'>
                             <div className='priceBg pt-2 pb-2'>
                                 <Typography variant="overline" display="block" gutterBottom>
                                   {feedCard?.set?.ptcgoCode}
                                 </Typography>
                                 <Typography variant="h6" display="block" gutterBottom>
                                   {feedCard?.cardmarket?.prices?.averageSellPrice}
                                 </Typography>
                             </div>
                         </div>
                      </div>
                 </div>
             </div>
             <div className='dFlex'>
                 <div className='d-flex feed-view__image'>
                     <img
                        className='feed_card-image'
                        src={feedCard?.images?.small}
                        alt="{row.images.small}"
                        loading="lazy" 
                      />
                 </div>
                 <div className='row feed-view__details'>
                     <div className='feed-view-tbl col-md-2 col-lg-2 textLeft'>
                         <Typography variant="subtitle2" gutterBottom component="div">
                           Card Type
                         </Typography>
                         <Typography variant="subtitle2" gutterBottom component="div">
                           Series
                         </Typography>
                         <Typography variant="subtitle2" gutterBottom component="div">
                           Set
                         </Typography>
                         <Typography variant="subtitle2" gutterBottom component="div">
                           Release Date	
                         </Typography>
                         <Typography variant="subtitle2" gutterBottom component="div">
                           Card
                         </Typography>
                     </div>
                     <div className='feed-view-tbl col-md-6 col-lg-6 textLeft'>
                         <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                           {feedCard?.supertype} 
                         </Typography>
                         <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                           {feedCard?.set?.series}
                         </Typography>
                         <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                           {feedCard?.set?.name}
                         </Typography>
                         <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                           {feedCard?.set?.releaseDate}
                         </Typography>
                         <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                           {feedCard?.set?.id}
                         </Typography>
                     </div>
                 </div>
             </div>
             <div className='d-flex mt-5 priceSection'>
                <div className='Printed__Total pt-4'>
                     <Typography variant="subtitle2" gutterBottom component="div">
                       Printed Total
                     </Typography>
                    <Box className="d-flex">
                         <Typography variant="h3" display="block" gutterBottom>
                           {feedCard?.set?.printedTotal} 
                         </Typography>
                         <Typography variant="h5" display="block" gutterBottom>
                           {feedCard?.set?.ptcgoCode} 
                         </Typography>
                    </Box>
                </div>
                <div className='row Overall__Grade'>
                     <div className='row col-sm-12 col-md-6  pt-4'>
                          <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                Average Sell<br/> (Price)
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.cardmarket?.prices?.avg1} 
                              </Typography>
                         </div>
                         <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                lower Sell <br/> (Price)
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.cardmarket?.prices?.lowPrice} 
                              </Typography>
                         </div>
                     </div>
                     <div className='row col-sm-12 col-md-6  pt-4'>
                          <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                Reverse Holo<br/> (Sell)
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.cardmarket?.prices?.reverseHoloTrend} 
                              </Typography>
                         </div>
                         <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                Trend<br/> (Price) 
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.cardmarket?.prices?.trendPrice} 
                              </Typography>
                         </div>
                     </div>
                </div>
             </div>


             <div className='mt-5 mb-5 textLeft Feed__Weaknesses'>
                 <Typography variant="h6" display="block" gutterBottom>
                 {feedCard?.artist} Data :
                 </Typography>
                 <div className='row'>
                 <div className='row col-sm-12 col-md-6  pt-2'>
                          <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                 Number
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.number} 
                              </Typography>
                         </div>
                         <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                Evolves From
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                 {feedCard?.evolvesFrom} 
                              </Typography>
                         </div>
                     </div>
                     <div className='row col-sm-12 col-md-6  pt-4'>
                          <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                Regulation Mark
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.regulationMark} 
                              </Typography>
                         </div>
                         <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                 Feed name
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.name} 
                              </Typography>
                         </div>
                     </div>
                 </div>
             </div>
             <div className='mt-5 mb-5 textLeft Feed__Weaknesses'>
                 <Typography variant="h6" display="block" gutterBottom>
                    Feed TCG Player :
                 </Typography>
                 <div className='row'>
                 <div className='row col-sm-12 col-md-6  pt-2'>
                          <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                High
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.tcgplayer?.prices?.holofoil?.high} 
                              </Typography>
                         </div>
                         <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                               Low
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                               {feedCard?.tcgplayer?.prices?.holofoil?.low} 
                              </Typography>
                         </div>
                     </div>
                     <div className='row col-sm-12 col-md-6  pt-4'>
                          <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                Market
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.tcgplayer?.prices?.holofoil?.market} 
                              </Typography>
                         </div>
                         <div className='col-6'>
                              <Typography className='fontW400' variant="subtitle2" gutterBottom component="div">
                                 Mid
                              </Typography>
                              <Typography variant="h6" display="block" gutterBottom>
                                {feedCard?.tcgplayer?.prices?.holofoil?.mid} 
                              </Typography>
                         </div>
                     </div>
                 </div>
             </div>
        </Fragment>
    );
};

export default SingleCardD;