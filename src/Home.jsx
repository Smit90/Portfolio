import React from 'react';

import web from "../src/images/developer.svg"
import Common from './Common';

const Home = () => {
  return (
    <Common 
        name="Hello, I'm"
        imgsrc={web}
        visit="/service"
        btname="Get Started" />
  );
}

export default Home;
