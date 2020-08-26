import React from 'react';
import Typical from "react-typical";


import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 oreder-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong id="brandname"> <Typical 
                                                loop={Infinity}
                                                wrapper='b'
                                                steps={[
                                                  ' Smit Patel',
                                                  1000,
                                                  ' Developer',
                                                  1000
                                                ]}
                                            /> 
                    </strong>
                  </h1>
                  <h4 className="my-3">
                    I'm Front End/ Back End Developer.
                  </h4>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary">{props.btname}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="" alt="Home img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    
    </>
  );
}

export default Common;
