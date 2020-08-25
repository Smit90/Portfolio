import React from "react";
import Skillright from "./Skillright";
import Skilldata from "./Skilldata";


const Skills = (props) => {

    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                <h2 className="text-center p-3">My Skills</h2>
                    <div className="col-10 mx-auto ">
                        <div className="row">
                            {Skilldata.map((val, ind) => {
                                return <Skillright
                                    key={ind}
                                    title={val.title}
                                    percentage={val.percentage}
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

export default Skills;