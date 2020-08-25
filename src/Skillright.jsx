import React from "react";

const Skillright = (props) => {

    const divStyle = {
        width: props.percentage
    }
    return (
        <>
            <div className="col-md-6 my-3 col-sm-10">
                <div className="right">
                    <span><label>{props.title}</label></span>
                    <div className="progress">
                        <div style={divStyle} className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={props.percentage} aria-valuemin="0" aria-valuemax="100">{props.percentage}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skillright;