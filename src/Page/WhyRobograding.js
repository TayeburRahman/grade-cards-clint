import React from 'react';
import ContactFrom from '../Components/HeaderCo/ContactFrom';
import RoboGradingBecause from '../Components/HeaderCo/WhyRobograding/ RoboGradingBecause';
import WhyRobogradingBanner from '../Components/HeaderCo/WhyRobograding/WhyRobogradingBanner';
import WhyRoboradingWork from '../Components/HeaderCo/WhyRobograding/WhyRoboradingWork';

const WhyRobograding = () => {
    return (
        < >
            <WhyRobogradingBanner></WhyRobogradingBanner>
            <RoboGradingBecause></RoboGradingBecause>
            <WhyRoboradingWork></WhyRoboradingWork>
            <ContactFrom></ContactFrom>
        </>
    );
};

export default WhyRobograding;