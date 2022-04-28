import React, { Fragment } from 'react';
import BannerCo from '../Components/HeaderCo/BannerCo';
import Carousol from '../Components/HeaderCo/Carousol';
import Footer from '../Components/HeaderCo/Footer';
import HomeSecond from '../Components/HeaderCo/HomeSecond';
import TamperFreeSlabs from '../Components/HeaderCo/TamperFreeSlabs';
import Navbars from '../Navbar/Navbars';

const Home = () => {
    return (
        <Fragment>
        <Navbars></Navbars>
          <BannerCo></BannerCo>
          <TamperFreeSlabs></TamperFreeSlabs>
          <HomeSecond></HomeSecond>
          <Carousol></Carousol>
          <Footer></Footer>
      </Fragment>
    );
};

export default Home;