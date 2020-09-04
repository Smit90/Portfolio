import React from 'react';

import Common from "./Common";
import web from "../src/images/about.svg";
import Skills from './Skills';
import Journey from './Journey';


const About = () => {
  return (
    <>
      <Common
        name="About"
        imgsrc={web}
        visit="/contact"
        text="I'm constantly learning new things."
        btname="Contact Now"
      />
      <Skills />
        <Journey />
    </>
  );
}

export default About;
