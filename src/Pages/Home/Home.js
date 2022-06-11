import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Services from '../../components/Services/Services'
import Advantages from "../../components/Advantages/Advantages"
import ServicePackages from '../../components/ServicePackages/ServicePackages'
import Work from '../../components/Work/Work'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Staff from '../../components/Staff/Staff' 

const Home = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Staff/>
      <Services/>
      <Advantages/>
      <ServicePackages/>
      <Work/>
    </div>
)
};

export default Home;
