import React from 'react'
import Header from '../components/Header/Header'
import RedLine from "../components/RedLine/RedLine"
import OneSec from '../components/OneSec/OneSec';
import TwoSec from '../components/TwoSec/TwoSec';
import LinkIcon from '../components/LinkIcon/LinkIcon';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Cards from '../components/Cards/Cards';
import ThreeSec from '../components/ThreeSec/ThreeSec';
 function Home () {
  return (
    <>
    <Header />
    <RedLine />
    <OneSec />
    <TwoSec />
    <LinkIcon />
    <ChooseUs />
    <Cards />
    <ThreeSec />
    </>
    
  )
}

export default Home;