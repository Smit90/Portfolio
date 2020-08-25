import React from 'react';

import Common from "./Common";
import web from "../src/images/about.svg";
import Skills from './Skills';
import Journey from './Journey';


const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
      <Skills />
        <Journey />
    </>
  );
}

export default About;
