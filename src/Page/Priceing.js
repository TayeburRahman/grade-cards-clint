import React from 'react';
import Footer from '../Components/HeaderCo/Footer';
import PriceCarousol from '../Components/HeaderCo/PricingCompo/PriceCrosule';
import PriceingBanner from '../Components/HeaderCo/PricingCompo/PriceingBanner';
import PricingCompo from '../Components/HeaderCo/PricingCompo/PricingCompo';
import Navbarsfix from '../Navbar/Navbarfix';

const Priceing = () => {
    return (
        < >
            <Navbarsfix></Navbarsfix>
            <PriceingBanner></PriceingBanner>
            <PricingCompo></PricingCompo>
            <PriceCarousol></PriceCarousol>
            <Footer></Footer>
        </>
    );
};

export default Priceing;