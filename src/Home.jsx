import React from 'react';

import web from "../src/images/developer.svg"
import Common from './Common';
import Social from './Social';
const Home = () => {
  return (
    <>
    <Common 
        name="Hello, I'm"
        imgsrc={web}
        visit="/service"
        text="I'm Front End/ Back End Developer."
        btname="Get Started" />
    <Social />

    </>
  );
}

export default Home;
