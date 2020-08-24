import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import web from "../src/images/1st.svg";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 oreder-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow your bussiness with
                    <strong id="brandname"> Smit Patel</strong>
                  </h1>
                  <h5 className="my-3">
                    I'm Web Developer and making websites.
                  </h5>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn btn-outline-primary">Get Started</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="" alt="Home img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    
    </>
  );
}

export default Home;
