import React from 'react';
import Card from "./card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Projects</h1>
      </div>
      <div className="container-fluid md-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
                { Sdata.map((val, ind) => {
                    return <Card 
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      demolink={val.demolink}
                      codelink={val.codelink}
                    />
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
