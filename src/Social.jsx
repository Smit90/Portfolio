import React from 'react'
import SocialAccList from './SocialAccList'
import SocialAccount from './SocialAccount'

const Social = () => {
    return (
        <>
        <div className="container-fluid my-5 ">
            <div className="row">
            <h2 className="text-center p-3">Get in Touch</h2>
                <div className="col-10 text-center mx-auto ">
                        {SocialAccList.map((val, ind) => {
                            return <SocialAccount
                                key={ind}
                                name={val.name}
                                link={val.link}
                            />
                        })
                        }
                </div>
            </div>
        </div>
    </>
    )
}

export default Social
