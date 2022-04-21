import React from 'react';
import PriceCarousol from '../Components/HeaderCo/PricingCompo/PriceCrosule';
import PriceingBanner from '../Components/HeaderCo/PricingCompo/PriceingBanner';
import PricingCompo from '../Components/HeaderCo/PricingCompo/PricingCompo';
import Navbarsfix from '../Navbar/Navbarfix';
import Navbars from '../Navbar/Navbars';

const Priceing = () => {
    return (
        < >
            <Navbarsfix></Navbarsfix>
            <PriceingBanner></PriceingBanner>
            <PricingCompo></PricingCompo>
            <PriceCarousol></PriceCarousol>
        </>
    );
};

export default Priceing;