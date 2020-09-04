import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card card-flip ">
          <div className="card-front">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          </div>
          <div className="card-back bg-dark">
            <div className="card-body">
              <h5 className="card-title text-center">{props.title}</h5>
              <div className="text-center p-2">
                <a className="btn btn-outline-success" href={props.demolink} target="_blank" rel="noopener noreferrer" role="button">Demo</a> <a className="btn btn-outline-primary" href={props.codelink} target="_blank" rel="noopener noreferrer" role="button">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
